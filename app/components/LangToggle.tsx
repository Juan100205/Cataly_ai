"use client";

import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export default function LangToggle() {
    const { lang, setLang } = useLang();
    const { theme, setTheme } = useTheme();

    const isLight = theme === 'light';

    const btnClass = `flex items-center justify-center pr-3 pl-4 py-2.5 rounded-l-full
        border border-r-0 backdrop-blur-md
        text-xs font-medium tracking-widest
        transition-all duration-300 cursor-pointer select-none
        hover:border-[#42C971]/40
        ${isLight
            ? 'bg-[#F2F2EE]/90 border-black/10 text-[#0D0D0D]/70 hover:text-[#0D0D0D]'
            : 'bg-[#0D0D0D]/90 border-white/10 text-white/70 hover:text-white'
        }`;

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                aria-label="Cambiar idioma"
                className={btnClass}
            >
                {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
                onClick={() => setTheme(isLight ? 'dark' : 'light')}
                aria-label={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
                className={btnClass}
            >
                {isLight ? <MoonIcon /> : <SunIcon />}
            </button>
        </div>
    );
}
