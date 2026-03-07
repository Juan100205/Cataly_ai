"use client";

import { LangProvider } from '../i18n/LangContext';
import { ThemeProvider } from '../i18n/ThemeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LangProvider>{children}</LangProvider>
        </ThemeProvider>
    );
}
