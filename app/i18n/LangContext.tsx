"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { translations, Lang } from './translations';

type T = typeof translations['es'];

type LangContextType = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: T;
};

const LangContext = createContext<LangContextType>({
    lang: 'es',
    setLang: () => {},
    t: translations['es'],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('es');

    // On mount: localStorage → navigator.language → es
    useEffect(() => {
        const stored = localStorage.getItem('cataly-lang') as Lang | null;
        if (stored === 'es' || stored === 'en') {
            setLangState(stored);
        } else {
            const browserLang = navigator.language.toLowerCase();
            setLangState(browserLang.startsWith('es') ? 'es' : 'en');
        }
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('cataly-lang', l);
    };

    return (
        <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
