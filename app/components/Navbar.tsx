"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LogoWhite from '../assets/Logo_white.png';
import LogoNegro from '../assets/Logo_negro.png';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';
import { useDemoModal } from '../i18n/DemoModalContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
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

    // Cierra el menú al cambiar de ruta o hacer scroll
    useEffect(() => {
        if (isScrolled) setMobileOpen(false);
    }, [isScrolled]);

    const navLinks = [
        { href: '/',            label: t.navbar.system },
        { href: '/product',     label: t.navbar.product },
        { href: '/results',     label: t.navbar.results },
        { href: '/security',    label: t.navbar.security },
        { href: '/about',       label: t.navbar.about },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 group ${isScrolled ? 'pt-4' : 'pt-6'}`}
                style={{ transition: 'padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
            >
                <div
                    className={`w-full max-w-7xl flex items-center justify-between px-4 md:px-6 py-2 rounded-[2rem] cursor-default ${
                        isScrolled
                            ? 'backdrop-blur-xl bg-[#0A0A0C]/60 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-95 opacity-30 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[#0A0A0C]/80'
                            : 'backdrop-blur-none bg-transparent border-transparent scale-100 opacity-100'
                    }`}
                    style={{ transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center cursor-pointer flex-shrink-0">
                        <Image src={theme === 'light' ? LogoNegro : LogoWhite} alt="Logo" width={75} height={75} />
                    </Link>

                    {/* Desktop nav */}
                    <nav className={`hidden md:flex items-center space-x-6 px-6 py-2.5 rounded-full transition-all duration-500 ${
                        isScrolled ? 'bg-transparent border-transparent shadow-none' : 'bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
                    }`}>
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA + hamburger */}
                    <div className="flex items-center gap-3">
                        <button onClick={open} className="glass-btn text-sm font-medium cursor-pointer hidden md:inline-flex">
                            {t.navbar.cta}
                        </button>

                        {/* Hamburger — solo móvil */}
                        <button
                            onClick={() => setMobileOpen(v => !v)}
                            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-xl bg-white/[0.05] border border-white/[0.08] cursor-pointer"
                            aria-label="Menu"
                        >
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-4 h-[1.5px] bg-white/70 rounded-full origin-center"
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.15 }}
                                className="block w-4 h-[1.5px] bg-white/70 rounded-full"
                            />
                            <motion.span
                                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-4 h-[1.5px] bg-white/70 rounded-full origin-center"
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 left-0 right-0 z-40 pt-24 pb-8 px-5 bg-[#0A0A0C]/95 backdrop-blur-2xl border-b border-white/[0.06] md:hidden"
                    >
                        <nav className="flex flex-col gap-1">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-base font-light text-white/70 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.04] transition-all duration-200"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-6 px-4">
                            <button
                                onClick={() => { open(); setMobileOpen(false); }}
                                className="w-full py-3.5 rounded-2xl bg-[#10B981] text-[#0A0A0C] font-medium text-sm cursor-pointer"
                            >
                                {t.navbar.cta}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
