"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/TheNextGenius", color: "text-purple-400" },
    // TODO: Update with your actual LinkedIn URL
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jayshukla", color: "text-blue-400" },
    // TODO: Update with your actual email
    { name: "Email", icon: Mail, href: "mailto:jayshukla@example.com", color: "text-green-400" },
];

export default function Footer() {
    return (
        <footer id="contact" className="relative py-20 px-4 bg-gradient-to-b from-transparent to-shadow-blue">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-system-purple mb-4">
                            [PORTAL GATES]
                        </h3>
                        <p className="text-gray-400 font-mono text-sm">
                            Connect through these dimensional gates
                        </p>
                    </motion.div>

                    <div className="flex justify-center gap-6">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`${link.color} p-4 bg-shadow-gray border border-current rounded-lg hover:shadow-[0_0_20px_currentColor] transition-all`}
                            >
                                <link.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="border-t border-system-blue/30 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="text-system-blue">PLAYER ID:</span>
                                <span>TheNextGenius</span>
                            </div>
                            <div>© 2026 Jay Shukla. All rights reserved.</div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span>SYSTEM ONLINE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
