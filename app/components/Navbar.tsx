"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/Logo_white.png';
import LogoNegro from '../assets/Logo_negro.png';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';
import { useDemoModal } from '../i18n/DemoModalContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLang();
    const { theme } = useTheme();
    const { open } = useDemoModal();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 group ${isScrolled ? 'pt-4' : 'pt-6'
                }`}
            style={{ transition: 'padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
            <div className={`w-full max-w-7xl flex items-center justify-between px-6 py-2 rounded-[2rem] cursor-default ${isScrolled
                ? 'backdrop-blur-xl bg-[#0A0A0C]/60 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-95 opacity-80 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[#0A0A0C]/80'
                : 'backdrop-blur-none bg-transparent border-transparent scale-100 opacity-100'
                }`}
                style={{ transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}>

                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer">
                    <Image src={theme === 'light' ? LogoNegro : LogoWhite} alt="Logo" width={85} height={85} />
                </Link>

                <nav className={`hidden md:flex items-center space-x-6 px-6 py-2.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-transparent border-transparent shadow-none' : 'bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
                    }`}>
                    <Link href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">{t.navbar.system}</Link>
                    <Link href="/product" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">{t.navbar.product}</Link>
                    <Link href="/results" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">{t.navbar.results}</Link>
                    <Link href="/security" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">{t.navbar.security}</Link>
                    <Link href="/about" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">{t.navbar.about}</Link>
                </nav>

                {/* Right Action */}
                <div className="flex items-center">
                    <button onClick={open} className="glass-btn text-sm font-medium cursor-pointer">
                        {t.navbar.cta}
                    </button>
                </div>

            </div>
        </header>
    );
}
