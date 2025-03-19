import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add a Sphere
    const geometry = new THREE.SphereGeometry(15, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true }); // Changed color to blue
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Position the Camera
    camera.position.z = 20; // Adjusted camera position to fit the larger sphere

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }} />;
};

export default ThreeDBackground;