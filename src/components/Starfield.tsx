'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Starfield: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
	const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		const scene = new THREE.Scene();
		const newCamera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		newCamera.position.z = 5;
		setCamera(newCamera);

		const newRenderer = new THREE.WebGLRenderer({ canvas });
		newRenderer.setSize(window.innerWidth, window.innerHeight);
		setRenderer(newRenderer);

		const geometry = new THREE.BufferGeometry();
		const positions = [];

		for (let i = 0; i < 5000; i++) {
			positions.push(
				THREE.MathUtils.randFloatSpread(2000),
				THREE.MathUtils.randFloatSpread(2000),
				THREE.MathUtils.randFloatSpread(2000)
			);
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3)
		);

		const material = new THREE.PointsMaterial({ color: 0xffffff });
		const stars = new THREE.Points(geometry, material);
		scene.add(stars);

		const animate = () => {
			requestAnimationFrame(animate);
			stars.rotation.x += 0.001;
			stars.rotation.y += 0.001;
			newRenderer.render(scene, newCamera);
		};

		animate();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const height = document.documentElement.scrollHeight;
			if (renderer && camera) {
				renderer.setSize(width, height + 1324);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [renderer, camera]);

	return (
		<canvas
			className="absolute top-0 left-0 w-full z-[-1]"
			ref={canvasRef}
		></canvas>
	);
};

export default Starfield;
