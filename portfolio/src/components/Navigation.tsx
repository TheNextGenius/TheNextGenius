"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "HOME", href: "#hero" },
    { name: "STATS", href: "#stats" },
    { name: "GATES", href: "#projects" },
    { name: "QUEST", href: "#quest" },
    { name: "CONTACT", href: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-shadow-black/80 backdrop-blur-md border-b border-system-blue/30"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-system-purple rounded-full animate-pulse" />
                    <span className="font-bold text-system-purple tracking-widest">SYSTEM</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-sm font-mono text-gray-400 hover:text-system-blue transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-system-blue group-hover:w-full transition-all duration-300" />
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-system-blue"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-shadow-blue/95 border-t border-system-blue/30"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="block w-full text-left px-4 py-3 text-sm font-mono text-gray-400 hover:text-system-blue hover:bg-system-blue/10 transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
