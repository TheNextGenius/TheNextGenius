"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import SystemWindow from "./SystemWindow";
import ChaHae3D from "./ChaHae3D";

import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
    const [text, setText] = useState("");
    const { isProfessionalMode } = useTheme();

    const hunterText = "PLAYER DETECTED. WELCOME, SHADOW MONARCH.";
    const proText = "SYSTEM INITIALIZED. WELCOME, VISITOR.";
    const fullText = isProfessionalMode ? proText : hunterText;

    useEffect(() => {
        let i = 0;
        setText(""); // Reset text when mode changes
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 transition-colors duration-700 ${isProfessionalMode ? "bg-slate-950" : ""
            }`}>
            {/* Background with gradient instead of broken texture */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isProfessionalMode
                    ? "bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-950 opacity-100"
                    : "bg-gradient-to-b from-shadow-black via-shadow-blue/50 to-shadow-black"
                }`} />
            <div className={`absolute inset-0 bg-black/60 z-0 transition-opacity duration-700 ${isProfessionalMode ? "opacity-40" : "opacity-100"}`} />

            <div className="z-10 w-full max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* 3D Model Section - Hidden in Pro Mode */}
                {!isProfessionalMode && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <ChaHae3D />
                    </motion.div>
                )}

                {/* Content Section */}
                <div className={`w-full order-1 lg:order-2 transition-all duration-700 ${isProfessionalMode ? "lg:w-full max-w-3xl mx-auto" : "lg:w-1/2"}`}>
                    <SystemWindow
                        className="w-full"
                        title={isProfessionalMode ? "PROFESSIONAL_PROFILE" : "PLAYER_INFO"}
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className={`transition-colors duration-500 ${isProfessionalMode
                                        ? "text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                        : "text-system-purple drop-shadow-[0_0_15px_rgba(123,44,191,0.8)]"
                                    }`}
                            >
                                <h1 className={`text-4xl md:text-6xl font-bold tracking-tighter ${isProfessionalMode ? "font-sans" : ""}`}>
                                    JAY SHUKLA
                                </h1>
                                <p className={`text-xl md:text-2xl mt-2 font-mono ${isProfessionalMode ? "text-slate-400" : "text-system-blue"}`}>
                                    {isProfessionalMode ? "FULL STACK DEVELOPER" : "THE NEXT GENIUS"}
                                </p>
                            </motion.div>

                            <div className={`h-8 md:h-12 w-full bg-black/50 border rounded flex items-center justify-center transition-colors ${isProfessionalMode ? "border-slate-700" : "border-system-blue/30"
                                }`}>
                                <span className={`font-mono animate-pulse ${isProfessionalMode ? "text-slate-300" : "text-system-blue"}`}>
                                    {text}<span className={`inline-block w-2 h-5 ml-1 animate-blink ${isProfessionalMode ? "bg-slate-300" : "bg-system-blue"}`} />
                                </span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.5 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <button
                                    onClick={() => scrollToSection("stats")}
                                    className={`px-6 py-2 border transition-all duration-300 font-bold tracking-wider rounded shadow-lg ${isProfessionalMode
                                            ? "bg-blue-600/20 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                                            : "bg-system-purple/20 border-system-purple text-system-purple hover:bg-system-purple hover:text-white shadow-[0_0_10px_rgba(123,44,191,0.3)]"
                                        }`}
                                >
                                    {isProfessionalMode ? "VIEW COMPETENCIES" : "ENTER DUNGEON"}
                                </button>
                                <button
                                    onClick={() => scrollToSection("quest")}
                                    className={`px-6 py-2 border transition-all duration-300 font-mono text-sm ${isProfessionalMode
                                            ? "border-slate-600 text-slate-400 hover:bg-slate-800"
                                            : "border-system-blue text-system-blue hover:bg-system-blue/20"
                                        }`}
                                >
                                    {isProfessionalMode ? "[PROJECTS & EXPERIENCE]" : "[VIEW QUESTS]"}
                                </button>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 border border-yellow-500 text-white hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-bold tracking-wider rounded shadow-[0_0_10px_rgba(234,179,8,0.3)] flex items-center gap-2"
                                >
                                    <Download size={16} />
                                    {isProfessionalMode ? "DOWNLOAD RESUME" : "S-RANK DOC"}
                                </a>
                            </motion.div>
                        </div>
                    </SystemWindow>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.button
                    onClick={() => scrollToSection("stats")}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className={`transition-colors ${isProfessionalMode ? "text-slate-500 hover:text-blue-400" : "text-system-blue/70 hover:text-system-blue"}`}
                    aria-label="Scroll down"
                >
                    <ChevronDown size={32} />
                </motion.button>
            </motion.div>
        </section>
    );
}

