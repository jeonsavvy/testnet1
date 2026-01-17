"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = () => {
    const mesh = useRef<THREE.Mesh>(null!);
    const { mouse, viewport } = useThree();

    useFrame((state) => {
        if (mesh.current) {
            // Mouse interaction: Rotate based on mouse position
            // Interpolate towards mouse position for smooth movement
            const targetX = mouse.y * 0.5; // Invert logic as per preference usually
            const targetY = mouse.x * 0.5;

            // Standard smooth rotation + mouse influence
            mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.1;
            mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.1;

            // Allow continuous slow rotation if no mouse input ?? Or strictly mouse?
            // User asked: "차라리 마우스를 따라가게 하던가" (Rather make it follow mouse)
            // So we emphasize mouse follow. Adding slight constant rotation for life.
            mesh.current.rotation.y += 0.005;
        }
    });

    return (
        <mesh ref={mesh} rotation={[0.4, 0.4, 0]}>
            <boxGeometry args={[3.5, 3.5, 3.5]} />
            <meshBasicMaterial color="#000000" wireframe={true} />
        </mesh>
    );
};

function Particles({ count = 300 }) {
    const mesh = useRef<THREE.Points>(null!);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 10;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            // Auto-rotation: deeply space floating feel
            mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#000000"
                sizeAttenuation={true}
                transparent={false}
                opacity={0.8}
            />
        </points>
    );
}

export default function DataCube() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            {/* resize={{ scroll: false }} prevents resize loop issues in some browsers */}
            {/* gl={{ preserveDrawingBuffer: true }} to prevent blinking on some GPUs during context restore */}
            <Canvas resize={{ scroll: false }} dpr={1} gl={{ preserveDrawingBuffer: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />

                <AnimatedCube />
                <Particles count={300} />
            </Canvas>
        </div>
    );
}
