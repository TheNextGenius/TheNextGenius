"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Zap, User } from "lucide-react";
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
    const { isProfessionalMode, toggleProfessionalMode } = useTheme();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${isProfessionalMode
                ? "bg-slate-900/80 border-slate-700/50"
                : "bg-shadow-black/80 border-system-blue/30"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${isProfessionalMode ? "bg-blue-400" : "bg-system-purple"}`} />
                    <span className={`font-bold tracking-widest ${isProfessionalMode ? "text-blue-400 font-sans" : "text-system-purple"}`}>
                        {isProfessionalMode ? "DEVELOPER" : "SYSTEM"}
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-sm font-mono transition-colors relative group ${isProfessionalMode ? "text-slate-400 hover:text-blue-400" : "text-gray-400 hover:text-system-blue"
                                    }`}
                            >
                                {isProfessionalMode && item.name === "GATES" ? "PROJECTS" : item.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isProfessionalMode ? "bg-blue-400" : "bg-system-blue"
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Pro Toggle */}
                    <button
                        onClick={toggleProfessionalMode}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300 ${isProfessionalMode
                            ? "bg-blue-900/30 border-blue-500 text-blue-400"
                            : "bg-system-purple/10 border-system-purple text-system-purple hover:bg-system-purple/20"
                            }`}
                        title={isProfessionalMode ? "Switch to Hunter Mode" : "Switch to Professional Mode"}
                    >
                        {isProfessionalMode ? <User size={14} /> : <Zap size={14} />}
                        <span className="text-[10px] font-bold tracking-tighter uppercase">
                            {isProfessionalMode ? "Professional" : "Hunter"}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleProfessionalMode}
                        className={`p-2 rounded-full border ${isProfessionalMode ? "border-blue-500 text-blue-400" : "border-system-purple text-system-purple"
                            }`}
                    >
                        {isProfessionalMode ? <User size={18} /> : <Zap size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={isProfessionalMode ? "text-blue-400" : "text-system-blue"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`md:hidden border-t ${isProfessionalMode ? "bg-slate-900/95 border-slate-700" : "bg-shadow-blue/95 border-system-blue/30"
                        }`}
                >
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className={`block w-full text-left px-4 py-3 text-sm font-mono transition-colors ${isProfessionalMode
                                ? "text-slate-400 hover:text-blue-400 hover:bg-blue-900/20"
                                : "text-gray-400 hover:text-system-blue hover:bg-system-blue/10"
                                }`}
                        >
                            {isProfessionalMode && item.name === "GATES" ? "PROJECTS" : item.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
