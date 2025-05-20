import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';

// The actual 3D model component
function Model() {
  const gltf = useLoader(GLTFLoader, '../components/laptop.glb');
  const modelRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    modelRef.current.rotation.y = Math.sin(t / 4) * 0.3;
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={1.5} 
      position={[0, -1, 0]} 
    />
  );
}

// Fallback component shown while the model is loading
function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366F1" />
    </mesh>
  );
}

// Main component to export
export default function LaptopModel() {
  return (
    <div className="h-[400px] w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <React.Suspense fallback={<Fallback />}>
          <Model />
          <Environment preset="city" />
        </React.Suspense>
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
}