"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, Environment, ContactShadows, PresentationControls, Html } from "@react-three/drei";
import * as THREE from "three";

function ChaHaeModel({ modelPath }: { modelPath: string }) {
    const group = useRef<THREE.Group>(null);
    const [error, setError] = useState(false);

    // Try to load the model, fallback to primitive if it fails
    let gltf: any = null;
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        gltf = useGLTF(modelPath, true);
    } catch (e) {
        if (!error) setError(true);
    }

    useFrame((state) => {
        if (group.current) {
            // Gentle floating animation
            const t = state.clock.getElapsedTime();
            group.current.position.y = Math.sin(t) * 0.1;
            group.current.rotation.y = Math.sin(t / 4) * 0.05;
        }
    });

    if (error || !gltf) {
        return (
            <mesh ref={group as any} position={[0, -1, 0]}>
                <cylinderGeometry args={[0.5, 0.7, 2, 32]} />
                <meshStandardMaterial color="#7b2cbf" emissive="#7b2cbf" emissiveIntensity={0.5} wireframe />
                <Html position={[0, 1.5, 0]} center>
                    <div className="text-system-blue font-mono text-xs whitespace-nowrap bg-black/80 px-2 py-1 border border-system-blue/30 rounded">
                        [MODEL_MISSING: CHA_HAE_IN]
                    </div>
                </Html>
            </mesh>
        );
    }

    return (
        <primitive
            ref={group}
            object={gltf.scene}
            scale={2}
            position={[0, -1.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
        />
    );
}

export default function ChaHae3D() {
    const [modelExists, setModelExists] = useState(false);

    useEffect(() => {
        // Check if the model exists in public folder
        fetch("/models/cha-hae-in.glb", { method: "HEAD" })
            .then(res => setModelExists(res.ok))
            .catch(() => setModelExists(false));
    }, []);

    return (
        <div className="w-full h-[400px] md:h-[600px] relative pointer-events-auto">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2cbf" />

                <Suspense fallback={
                    <Html center>
                        <div className="text-system-purple animate-pulse font-mono">[LOADING SYSTEM ASSETS...]</div>
                    </Html>
                }>
                    <PresentationControls
                        global
                        snap
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                    >
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            <ChaHaeModel modelPath="/models/cha-hae-in.glb" />
                        </Float>
                    </PresentationControls>

                    <ContactShadows
                        position={[0, -1.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                    />
                </Suspense>

                <Environment preset="night" />
            </Canvas>

            {/* Overlay info if model is a placeholder */}
            {!modelExists && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                    <p className="text-[10px] text-system-blue/50 font-mono uppercase tracking-widest">
                        Awaiting S-Rank Model Sync
                    </p>
                </div>
            )}
        </div>
    );
}
