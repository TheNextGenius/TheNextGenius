"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    isProfessionalMode: boolean;
    toggleProfessionalMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isProfessionalMode, setIsProfessionalMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("professionalMode");
        if (savedMode) {
            setIsProfessionalMode(savedMode === "true");
        }
    }, []);

    const toggleProfessionalMode = () => {
        setIsProfessionalMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("professionalMode", String(newMode));
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isProfessionalMode, toggleProfessionalMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
