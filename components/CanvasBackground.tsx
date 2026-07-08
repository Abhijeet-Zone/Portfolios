'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5} position={[4, 1, -5]}>
        <MeshDistortMaterial
          color="#3a86ff"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Sphere>
      <Sphere args={[1, 64, 64]} scale={2} position={[-4, -2, -8]}>
        <MeshDistortMaterial
          color="#06ffa5"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </Sphere>
    </Float>
  )
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3a86ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#06ffa5" />
        <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
