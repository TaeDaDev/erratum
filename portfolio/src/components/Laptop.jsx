import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import laptopUrl from '../assets/laptop.glb'

function LaptopModel() {
  const { scene } = useGLTF(laptopUrl)
  const mesh = useRef()
  const { camera } = useThree()
  const scrollY = useRef(0)
  const targetRotation = useRef(0)
  const targetCameraZ = useRef(4)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    if (!mesh.current) return

    const progress = Math.min(scrollY.current / 800, 1)

    // spin driven purely by scroll
    mesh.current.rotation.y = progress * Math.PI * 2

    // zoom camera in as user scrolls
    targetCameraZ.current = 4 - progress * 2.5
    camera.position.z += (targetCameraZ.current - camera.position.z) * 0.05
  })

  return (
    <primitive
      ref={mesh}
      object={scene}
      scale={1.5}
      position={[0, -0.5, 0]}
    />
  )
}

export default function Laptop() {
  return (
    <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#4ADE80" />
      <pointLight position={[-5, -2, -5]} intensity={0.5} />
      <LaptopModel />
    </Canvas>
  )
}
