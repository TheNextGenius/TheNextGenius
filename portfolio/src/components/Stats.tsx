"use client";

import { motion } from "framer-motion";
import SystemWindow from "./SystemWindow";

const stats = [
    { name: "LEVEL", value: "MAX", color: "text-system-purple" },
    { name: "STRENGTH", value: "95", max: 100, color: "text-red-500" },
    { name: "AGILITY", value: "88", max: 100, color: "text-green-500" },
    { name: "INTELLIGENCE", value: "92", max: 100, color: "text-blue-500" },
    { name: "MANA", value: "∞", color: "text-system-blue" },
];

const skills = [
    "Python", "C++", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Linux", "Git", "Ethical Hacking", "Penetration Testing"
];

export default function Stats() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
                {/* Stats Window */}
                <SystemWindow title="PLAYER STATS">
                    <div className="space-y-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-mono text-sm text-gray-400">{stat.name}</span>
                                    <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                                </div>
                                {stat.max && (
                                    <div className="h-2 bg-shadow-gray rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(parseInt(stat.value) / stat.max) * 100}%` }}
                                            transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
                                            viewport={{ once: true }}
                                            className={`h-full ${stat.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </SystemWindow>

                {/* Skills Window */}
                <SystemWindow title="SHADOW ARMY [SKILLS]">
                    <div className="grid grid-cols-2 gap-3">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,180,216,0.5)" }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-shadow-gray border border-system-blue/30 rounded p-3 text-center font-mono text-sm hover:border-system-blue transition-all cursor-pointer"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </SystemWindow>
            </div>
        </section>
    );
}
