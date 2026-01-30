"use client";

import { useEffect, useState } from "react";

export default function ParticleBackground() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; duration: number; size: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 12,
            size: 2 + Math.random() * 4, // Larger particles (2-6px)
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute bg-system-purple rounded-full opacity-70 animate-float"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        boxShadow: `0 0 ${particle.size * 4}px rgba(123, 44, 191, 0.9), 0 0 ${particle.size * 8}px rgba(123, 44, 191, 0.5)`,
                    }}
                />
            ))}
        </div>
    );
}
