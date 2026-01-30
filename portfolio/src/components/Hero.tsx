"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import SystemWindow from "./SystemWindow";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "PLAYER DETECTED. WELCOME, SHADOW MONARCH.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background with gradient instead of broken texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-shadow-black via-shadow-blue/50 to-shadow-black z-0" />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="z-10 w-full max-w-4xl px-4">
                <SystemWindow className="w-full">
                    <div className="flex flex-col items-center text-center gap-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="text-system-purple drop-shadow-[0_0_15px_rgba(123,44,191,0.8)]"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                                JAY SHUKLA
                            </h1>
                            <p className="text-xl md:text-2xl text-system-blue mt-2 font-mono">
                                THE NEXT GENIUS
                            </p>
                        </motion.div>

                        <div className="h-8 md:h-12 w-full bg-black/50 border border-system-blue/30 rounded flex items-center justify-center">
                            <span className="font-mono text-system-blue animate-pulse">
                                {text}<span className="inline-block w-2 h-5 bg-system-blue ml-1 animate-blink" />
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
                                className="px-6 py-2 bg-system-purple/20 border border-system-purple text-system-purple hover:bg-system-purple hover:text-white transition-all duration-300 font-bold tracking-wider rounded shadow-[0_0_10px_rgba(123,44,191,0.3)]"
                            >
                                ENTER DUNGEON
                            </button>
                            <button
                                onClick={() => scrollToSection("quest")}
                                className="px-6 py-2 border border-system-blue text-system-blue hover:bg-system-blue/20 transition-all duration-300 font-mono text-sm"
                            >
                                [VIEW QUESTS]
                            </button>
                            {/* TODO: Add your resume.pdf to /public folder */}
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 border border-yellow-500 text-white hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-bold tracking-wider rounded shadow-[0_0_10px_rgba(234,179,8,0.3)] flex items-center gap-2"
                            >
                                <Download size={16} />
                                S-RANK DOC
                            </a>
                        </motion.div>
                    </div>
                </SystemWindow>
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
                    className="text-system-blue/70 hover:text-system-blue transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown size={32} />
                </motion.button>
            </motion.div>
        </section>
    );
}

