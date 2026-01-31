"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ParticleBackground() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; duration: number; size: number }[]>([]);
    const { isProfessionalMode } = useTheme();

    useEffect(() => {
        const count = isProfessionalMode ? 30 : 50;
        const newParticles = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
            duration: isProfessionalMode ? (15 + Math.random() * 15) : (8 + Math.random() * 12),
            size: isProfessionalMode ? (1 + Math.random() * 2) : (2 + Math.random() * 4),
        }));
        setParticles(newParticles);
    }, [isProfessionalMode]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className={`absolute rounded-full transition-all duration-1000 animate-float ${isProfessionalMode ? "bg-slate-500 opacity-20" : "bg-system-purple opacity-70"
                        }`}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        boxShadow: isProfessionalMode
                            ? "none"
                            : `0 0 ${particle.size * 4}px rgba(123, 44, 191, 0.9), 0 0 ${particle.size * 8}px rgba(123, 44, 191, 0.5)`,
                    }}
                />
            ))}
        </div>
    );
}
