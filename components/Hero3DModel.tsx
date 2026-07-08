'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Cylinder, Html } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3DModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Character refs for animation
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const mouthRef = useRef<THREE.Mesh>(null);

  const [isTalking, setIsTalking] = useState(false);
  const [speechText, setSpeechText] = useState("");

  const phrases = [
    "Hello there! I'm Abhijeet.",
    "Welcome to my industrial portfolio.",
    "I build intelligent AI systems.",
    "Click me again!"
  ];

  const handleInteraction = () => {
    if (isTalking) return;
    setIsTalking(true);
    setSpeechText(phrases[Math.floor(Math.random() * phrases.length)]);
    
    // Stop talking after 3 seconds
    setTimeout(() => {
      setIsTalking(false);
      setSpeechText("");
    }, 3000);
  };

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Smooth, subtle mouse tracking for the whole scene (industrial feel)
    if (groupRef.current) {
      const targetRotationY = (state.pointer.x * Math.PI) / 8;
      const targetRotationX = -(state.pointer.y * Math.PI) / 16;
      
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    }

    // Typing animation for arms (only if not talking, else resting/gesturing)
    if (leftArmRef.current && rightArmRef.current) {
      if (isTalking) {
        // Gesturing
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, -0.5 + Math.sin(t * 5) * 0.2, 0.1);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, -0.5 + Math.cos(t * 5) * 0.2, 0.1);
      } else {
        // Typing
        leftArmRef.current.rotation.x = -Math.PI / 4 + Math.sin(t * 15) * 0.1;
        rightArmRef.current.rotation.x = -Math.PI / 4 + Math.cos(t * 14) * 0.1;
      }
    }

    // Subtle head movement (reading screen or looking around)
    if (headRef.current) {
      if (isTalking) {
        headRef.current.rotation.y = Math.sin(t * 4) * 0.1;
        headRef.current.rotation.x = Math.sin(t * 3) * 0.05;
      } else {
        headRef.current.rotation.y = Math.sin(t * 2) * 0.05;
        headRef.current.rotation.x = Math.sin(t * 1.5) * 0.05;
      }
    }

    // Mouth animation when talking
    if (mouthRef.current) {
      if (isTalking) {
        mouthRef.current.scale.y = 1 + Math.abs(Math.sin(t * 20)) * 2;
      } else {
        mouthRef.current.scale.y = 1;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        
        {/* ================= DESK & PC ================= */}
        {/* Move desk forward (Z=1) so character is behind it facing camera */}
        <Box args={[4.5, 0.1, 2.5]} position={[0, 0, 1]}>
          <meshStandardMaterial color="#f0f0f0" roughness={0.4} metalness={0.1} />
        </Box>
        {/* Desk Legs */}
        <Cylinder args={[0.06, 0.06, 2.5]} position={[-2, -1.25, 1]}>
          <meshStandardMaterial color="#222" />
        </Cylinder>
        <Cylinder args={[0.06, 0.06, 2.5]} position={[2, -1.25, 1]}>
          <meshStandardMaterial color="#222" />
        </Cylinder>

        {/* Monitor (moved to the side so it doesn't block face) */}
        <group position={[-1.2, 0, 1]} rotation={[0, 0.3, 0]}>
          <Box args={[1.8, 1.2, 0.1]} position={[0, 0.9, -0.4]}>
            <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
          </Box>
          <Box args={[1.7, 1.1, 0.02]} position={[0, 0.9, -0.34]}>
            <meshBasicMaterial color="#06ffa5" />
          </Box>
          <pointLight position={[0, 0.9, 0]} intensity={1} color="#06ffa5" distance={3} />
          <Cylinder args={[0.05, 0.05, 0.5]} position={[0, 0.25, -0.4]}>
            <meshStandardMaterial color="#333" />
          </Cylinder>
          <Box args={[0.7, 0.05, 0.4]} position={[0, 0.05, -0.4]}>
            <meshStandardMaterial color="#333" />
          </Box>
        </group>

        {/* Keyboard */}
        <Box args={[1.4, 0.05, 0.5]} position={[0, 0.05, 0.5]} rotation={[0.05, 0, 0]}>
          <meshStandardMaterial color="#222" />
        </Box>

        {/* PC Tower */}
        <Box args={[0.8, 1.8, 1.5]} position={[1.5, 0.9, 1]}>
          <meshStandardMaterial color="#111" roughness={0.3} metalness={0.5} />
        </Box>
        <Box args={[0.6, 1.6, 1.51]} position={[1.5, 0.9, 1]}>
          <meshStandardMaterial color="#000" roughness={0.1} />
        </Box>
        
        {/* ================= STYLIZED HUMANOID ================= */}
        {/* Character is positioned behind desk (Z=-0.5), rotated 180deg to face +Z (camera) */}
        <group position={[0, 0, -0.5]} rotation={[0, 0, 0]} onClick={handleInteraction}>
          
          {/* Chair */}
          <Cylinder args={[0.6, 0.6, 0.1]} position={[0, 0.5, -0.5]}>
            <meshStandardMaterial color="#333" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 0.5]} position={[0, 0.25, -0.5]}>
            <meshStandardMaterial color="#111" />
          </Cylinder>

          {/* Torso */}
          <Box args={[0.9, 1.3, 0.6]} position={[0, 1.1, -0.5]}>
            <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
          </Box>
          
          {/* Head & Neck */}
          <group ref={headRef} position={[0, 2, -0.5]}>
            <Cylinder args={[0.15, 0.15, 0.3]} position={[0, -0.2, 0]}>
              <meshStandardMaterial color="#e0ac69" />
            </Cylinder>
            <Sphere args={[0.4, 32, 32]} position={[0, 0.1, 0]}>
              <meshStandardMaterial color="#e0ac69" roughness={0.4} />
            </Sphere>
            {/* VR Headset / Visor */}
            <Box args={[0.85, 0.3, 0.4]} position={[0, 0.1, 0.2]}>
              <meshStandardMaterial color="#111" metalness={0.8} />
            </Box>
            <Box args={[0.7, 0.2, 0.41]} position={[0, 0.1, 0.2]}>
              <meshBasicMaterial color="#3a86ff" />
            </Box>
            
            {/* Mouth */}
            <Box ref={mouthRef} args={[0.2, 0.02, 0.1]} position={[0, -0.15, 0.35]}>
              <meshBasicMaterial color="#111" />
            </Box>

            {/* Speech Bubble Html Overlay */}
            {isTalking && (
              <Html position={[0.5, 0.5, 0]} center>
                <div className="bg-white text-black px-4 py-2 rounded-2xl shadow-xl font-bold whitespace-nowrap text-sm border-2 border-[#3a86ff] animate-bounce">
                  {speechText}
                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-[#3a86ff] transform rotate-45"></div>
                </div>
              </Html>
            )}
          </group>

          {/* Left Arm (Typing) */}
          <group position={[-0.55, 1.6, -0.5]}>
            <Sphere args={[0.2]}><meshStandardMaterial color="#2a2a2a" /></Sphere>
            <Cylinder args={[0.12, 0.12, 0.7]} position={[0, -0.3, 0.1]} rotation={[0.4, 0, 0]}>
              <meshStandardMaterial color="#2a2a2a" />
            </Cylinder>
            <group ref={leftArmRef} position={[0, -0.6, 0.3]}>
              <Cylinder args={[0.1, 0.1, 0.7]} position={[0, 0, 0.3]} rotation={[-1.57, 0, 0]}>
                <meshStandardMaterial color="#e0ac69" />
              </Cylinder>
              <Sphere args={[0.12]} position={[0, 0, 0.6]}><meshStandardMaterial color="#e0ac69" /></Sphere>
            </group>
          </group>

          {/* Right Arm (Typing) */}
          <group position={[0.55, 1.6, -0.5]}>
            <Sphere args={[0.2]}><meshStandardMaterial color="#2a2a2a" /></Sphere>
            <Cylinder args={[0.12, 0.12, 0.7]} position={[0, -0.3, 0.1]} rotation={[0.4, 0, 0]}>
              <meshStandardMaterial color="#2a2a2a" />
            </Cylinder>
            <group ref={rightArmRef} position={[0, -0.6, 0.3]}>
              <Cylinder args={[0.1, 0.1, 0.7]} position={[0, 0, 0.3]} rotation={[-1.57, 0, 0]}>
                <meshStandardMaterial color="#e0ac69" />
              </Cylinder>
              <Sphere args={[0.12]} position={[0, 0, 0.6]}><meshStandardMaterial color="#e0ac69" /></Sphere>
            </group>
          </group>
        </group>

      </Float>

      {/* Floating Glowing Orb for extra aesthetics */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.2, 32, 32]} position={[2.5, -0.5, 1.5]}>
          <meshBasicMaterial color="#3a86ff" />
        </Sphere>
        <pointLight position={[2.5, -0.5, 1.5]} intensity={2} color="#3a86ff" distance={5} />
      </Float>

    </group>
  );
}
