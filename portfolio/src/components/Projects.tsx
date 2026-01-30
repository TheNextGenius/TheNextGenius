"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SystemWindow from "./SystemWindow";

const projects = [
    {
        name: "Cha Hae",
        rank: "S-RANK",
        description: "AI Companion with advanced conversational capabilities",
        tech: ["Python", "AI/ML", "NLP"],
        github: "https://github.com/TheNextGenius/Cha-Hae",
        color: "from-purple-600 to-pink-600"
    },
    {
        name: "Bug Bounty Platform",
        rank: "A-RANK",
        description: "Penetration testing and vulnerability assessment toolkit",
        tech: ["Security", "Python", "Web"],
        color: "from-red-600 to-orange-600"
    },
    {
        name: "Portfolio System",
        rank: "A-RANK",
        description: "This immersive Solo Leveling themed portfolio",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        color: "from-blue-600 to-cyan-600"
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-6xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12 text-system-purple text-glow"
                >
                    [ACTIVE GATES]
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SystemWindow title={project.rank} className="h-full">
                                <div className="space-y-4">
                                    <div className={`h-32 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/40" />
                                        <h3 className="text-2xl font-bold z-10 drop-shadow-lg">{project.name}</h3>
                                    </div>

                                    <p className="text-gray-300 text-sm font-mono min-h-[3rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-system-blue/20 border border-system-blue/50 rounded text-xs font-mono text-system-blue"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-system-blue hover:text-system-purple transition-colors"
                                            >
                                                <Github size={16} />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        <button className="flex items-center gap-2 text-sm text-system-blue hover:text-system-purple transition-colors">
                                            <ExternalLink size={16} />
                                            <span>Enter</span>
                                        </button>
                                    </div>
                                </div>
                            </SystemWindow>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
