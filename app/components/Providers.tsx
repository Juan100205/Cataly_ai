"use client";

import { LangProvider } from '../i18n/LangContext';
import { ThemeProvider } from '../i18n/ThemeContext';
import { DemoModalProvider } from '../i18n/DemoModalContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LangProvider>
                <DemoModalProvider>{children}</DemoModalProvider>
            </LangProvider>
        </ThemeProvider>
    );
}
