"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SystemWindowProps {
    children: ReactNode;
    title?: string;
    className?: string;
}

export default function SystemWindow({ children, title = "SYSTEM ALERT", className = "" }: SystemWindowProps) {
    const { isProfessionalMode } = useTheme();

    // Default professional titles if none provided
    const displayTitle = isProfessionalMode && title === "SYSTEM ALERT" ? "INFORMATION" : title;

    if (isProfessionalMode) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl ${className}`}
            >
                {/* Clean Header */}
                <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50 flex justify-between items-center">
                    <span className="text-slate-200 font-sans font-semibold tracking-tight">
                        {displayTitle}
                    </span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {children}
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`system-window rounded-lg overflow-hidden relative ${className}`}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-shadow-blue to-system-blue/20 p-2 border-b border-system-blue flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-system-blue animate-pulse" />
                    <span className="text-system-blue font-bold tracking-widest text-sm drop-shadow-[0_0_5px_rgba(0,180,216,0.8)]">
                        {title}
                    </span>
                </div>
                <div className="flex gap-1">
                    <div className="w-12 h-[2px] bg-system-blue/50" />
                    <div className="w-2 h-[2px] bg-system-blue/50" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-shadow-black/80">
                {children}
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-system-blue" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-system-blue" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-system-blue" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-system-blue" />
        </motion.div>
    );
}
