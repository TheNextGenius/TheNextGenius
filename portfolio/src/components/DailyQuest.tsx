"use client";

import { motion } from "framer-motion";
import SystemWindow from "./SystemWindow";
import { useTheme } from "@/context/ThemeContext";

export default function DailyQuest() {
    const { isProfessionalMode } = useTheme();

    return (
        <section id="quest" className={`min-h-screen flex items-center justify-center py-20 px-4 transition-colors duration-700 ${isProfessionalMode ? "bg-slate-950" : ""
            }`}>
            <div className="max-w-4xl w-full">
                <SystemWindow title={isProfessionalMode ? "COLLABORATION" : "DAILY QUEST"}>
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className={`text-3xl md:text-4xl font-bold transition-colors duration-500 ${isProfessionalMode ? "text-blue-400 font-sans" : "text-system-purple"
                                }`}>
                                {isProfessionalMode ? "AVAILABLE FOR NEW OPPORTUNITIES" : "QUEST: RECRUIT THE SHADOW MONARCH"}
                            </h3>
                            <p className="text-gray-300 font-mono text-sm md:text-base">
                                {isProfessionalMode
                                    ? "Open to discussing full-time roles, contracts, or interesting collaborations."
                                    : "A powerful developer has appeared. Will you accept this quest?"}
                            </p>
                        </motion.div>

                        <div className={`border rounded-lg p-6 space-y-3 transition-colors duration-500 ${isProfessionalMode ? "bg-slate-800/50 border-slate-700" : "bg-shadow-gray border-system-blue/30"
                            }`}>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">
                                    {isProfessionalMode ? "Goal:" : "Objective:"}
                                </span>
                                <span className={`font-mono text-sm transition-colors ${isProfessionalMode ? "text-slate-200" : "text-system-blue"}`}>
                                    {isProfessionalMode ? "Schedule a Discussion" : "Hire Jay Shukla"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">
                                    {isProfessionalMode ? "Status:" : "Difficulty:"}
                                </span>
                                <span className="text-green-500 font-mono text-sm">
                                    {isProfessionalMode ? "AVAILABLE" : "EASY"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">
                                    {isProfessionalMode ? "Result:" : "Reward:"}
                                </span>
                                <span className="text-yellow-500 font-mono text-sm">
                                    {isProfessionalMode ? "HIGH-VALUE PARTNERSHIP" : "LEGENDARY DEVELOPER"}
                                </span>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 font-bold tracking-wider rounded transition-all duration-300 ${isProfessionalMode
                                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-xl"
                                    : "bg-gradient-to-r from-system-purple to-system-blue text-white shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_30px_rgba(123,44,191,0.8)]"
                                }`}
                        >
                            {isProfessionalMode ? "GET IN TOUCH" : "[ACCEPT QUEST]"}
                        </motion.button>
                    </div>
                </SystemWindow>
            </div>
        </section>
    );
}
