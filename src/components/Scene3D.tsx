import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function ReactLogo({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={groupRef} position={position} scale={0.8}>
        {/* Center sphere */}
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.5} />
        </Sphere>
        
        {/* Orbital rings */}
        {[0, 1, 2].map((i) => (
          <Torus
            key={i}
            args={[1.2, 0.05, 16, 100]}
            rotation={[Math.PI / 2 + (i * Math.PI) / 3, 0, (i * Math.PI) / 3]}
          >
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} transparent opacity={0.8} />
          </Torus>
        ))}
      </group>
    </Float>
  );
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={position}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2} 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </Float>
  );
}

function GlowingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere args={[0.4, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 200;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#4FD1C5" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4FD1C5" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9F7AEA" />
          <spotLight position={[0, 10, 0]} intensity={0.8} color="#fff" angle={0.3} />
          
          <ReactLogo position={[0, 0, 0]} />
          
          <FloatingCube position={[-4, 2, -2]} color="#4FD1C5" />
          <FloatingCube position={[4, -2, -3]} color="#9F7AEA" />
          <FloatingCube position={[3, 3, -4]} color="#4FD1C5" />
          
          <GlowingSphere position={[-3, -2, -2]} color="#9F7AEA" />
          <GlowingSphere position={[5, 1, -5]} color="#4FD1C5" />
          
          <ParticleField />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
