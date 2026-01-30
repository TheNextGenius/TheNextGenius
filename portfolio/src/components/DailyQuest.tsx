"use client";

import { motion } from "framer-motion";
import SystemWindow from "./SystemWindow";

export default function DailyQuest() {
    return (
        <section id="quest" className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-4xl w-full">
                <SystemWindow title="DAILY QUEST">
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-system-purple">
                                QUEST: RECRUIT THE SHADOW MONARCH
                            </h3>
                            <p className="text-gray-300 font-mono text-sm md:text-base">
                                A powerful developer has appeared. Will you accept this quest?
                            </p>
                        </motion.div>

                        <div className="bg-shadow-gray border border-system-blue/30 rounded-lg p-6 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">Objective:</span>
                                <span className="text-system-blue font-mono text-sm">Hire Jay Shukla</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">Difficulty:</span>
                                <span className="text-green-500 font-mono text-sm">EASY</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-mono text-sm">Reward:</span>
                                <span className="text-yellow-500 font-mono text-sm">LEGENDARY DEVELOPER</span>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-system-purple to-system-blue text-white font-bold tracking-wider rounded shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_30px_rgba(123,44,191,0.8)] transition-all"
                        >
                            [ACCEPT QUEST]
                        </motion.button>
                    </div>
                </SystemWindow>
            </div>
        </section>
    );
}
