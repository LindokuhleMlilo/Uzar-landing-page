// "use client";

// import { useRef, useState, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useTexture, Environment } from "@react-three/drei";
// import * as THREE from "three";

// export default function RotatingCoin() {
//   const [rotationSpeed, setRotationSpeed] = useState(1);
//   const [autoRotate, setAutoRotate] = useState(true);

//   return (
//     <div className="w-full h-[500px] bg-gradient-to-b from-white to-blue-100 rounded-lg shadow-lg">
//       <div className="absolute top-4 left-4 z-10 flex flex-col gap-4 bg-white/80 p-4 rounded-lg backdrop-blur-sm">
//         <div className="space-y-2">
//           <p className="text-sm font-medium">Rotation Speed</p>
//           <Slider
//             value={[rotationSpeed]}
//             min={0}
//             max={5}
//             step={0.1}
//             onValueChange={(value) => setRotationSpeed(value[0])}
//             className="w-48"
//           />
//         </div>
//         <Button
//           onClick={() => setAutoRotate(!autoRotate)}
//           variant={autoRotate ? "default" : "outline"}
//           className="w-48"
//         >
//           {autoRotate ? "Pause Rotation" : "Resume Rotation"}
//         </Button>
//       </div>

//       {/* Position camera to look directly at the coin face */}
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//         <ambientLight intensity={0.7} />
//         <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
//         <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
//         <Coin rotationSpeed={rotationSpeed} autoRotate={autoRotate} />
//         <OrbitControls enableZoom={true} enablePan={true} />
//         <Environment preset="studio" />
//       </Canvas>
//     </div>
//   );
// }

// function Coin({ rotationSpeed, autoRotate }) {
//   const coinRef = useRef();
//   const logoTexture = useTexture(
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universal.png-fM2OoljOFFxW7eWTw0cIP3FFmod767.jpeg",
//   );

//   // Process the texture to enhance the logo visibility
//   const processedTexture = useMemo(() => {
//     const texture = logoTexture.clone();
//     texture.needsUpdate = true;

//     // Enhance contrast and brightness
//     texture.encoding = THREE.sRGBEncoding;

//     return texture;
//   }, [logoTexture]);

//   // Create a metallic material for the edge of the coin
//   const edgeMaterial = {
//     metalness: 0.8,
//     roughness: 0.2,
//     color: "#4338ca", // Indigo color that complements the logo
//     emissive: "#3b82f6",
//     emissiveIntensity: 0.2,
//   };

//   useFrame((state, delta) => {
//     if (autoRotate) {
//       // Rotate around the Y axis for a spinning coin effect
//       coinRef.current.rotation.y += delta * rotationSpeed;
//     }
//   });

//   return (
//     <group ref={coinRef}>
//       {/* Front face of the coin */}
//       <mesh position={[0, 0, 0.1]}>
//         <circleGeometry args={[2, 64]} />
//         <meshStandardMaterial
//           map={processedTexture}
//           metalness={0.5}
//           roughness={0.3}
//           emissiveMap={processedTexture}
//           emissiveIntensity={0.2}
//           emissive="#ffffff"
//         />
//       </mesh>

//       {/* Back face of the coin */}
//       <mesh position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
//         <circleGeometry args={[2, 64]} />
//         <meshStandardMaterial
//           map={processedTexture}
//           metalness={0.5}
//           roughness={0.3}
//           emissiveMap={processedTexture}
//           emissiveIntensity={0.2}
//           emissive="#ffffff"
//         />
//       </mesh>

//       {/* Coin edge */}
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <cylinderGeometry args={[2, 2, 0.2, 64, 1, true]} />
//         <meshStandardMaterial {...edgeMaterial} />
//       </mesh>

//       {/* Highlight effect on the front */}
//       <mesh position={[0, 0, 0.11]} rotation={[0, 0, 0]}>
//         <ringGeometry args={[1.7, 2, 64]} />
//         <meshStandardMaterial
//           color="#60a5fa"
//           emissive="#3b82f6"
//           emissiveIntensity={0.5}
//           metalness={1}
//           roughness={0.2}
//           transparent={true}
//           opacity={0.3}
//         />
//       </mesh>

//       {/* Highlight effect on the back */}


//       <mesh position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]}>
//         <ringGeometry args={[1.7, 2, 64]} />
//         <meshStandardMaterial
//           color="#60a5fa"
//           emissive="#3b82f6"
//           emissiveIntensity={0.5}
//           metalness={1}
//           roughness={0.2}
//           transparent={true}
//           opacity={0.3}
//         />
//       </mesh>
//     </group>
//   );
// }