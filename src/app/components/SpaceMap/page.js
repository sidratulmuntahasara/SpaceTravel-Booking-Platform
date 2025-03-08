'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpaceMap() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add Stars
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add Planets
    const planetGeometry = new THREE.SphereGeometry(50, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.set(200, 0, 0);
    scene.add(planet);

    // Camera Position
    camera.position.z = 500;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      planet.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
}