import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Knot() {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.004
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.25, 256, 16, 2, 3]} />
      <meshStandardMaterial wireframe color="#4ADE80" />
    </mesh>
  )
}

export default function TorusKnot() {
  return (
    <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Knot />
    </Canvas>
  )
}
