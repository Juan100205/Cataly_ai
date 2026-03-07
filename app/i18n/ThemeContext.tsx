"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme;
    setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('dark');

    // On mount: localStorage → sistema → dark
    useEffect(() => {
        const stored = localStorage.getItem('cataly-theme') as Theme | null;
        if (stored === 'light' || stored === 'dark') {
            setThemeState(stored);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setThemeState(prefersDark ? 'dark' : 'light');
        }
    }, []);

    // Aplica clase al <html> y persiste
    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light');
        localStorage.setItem('cataly-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
