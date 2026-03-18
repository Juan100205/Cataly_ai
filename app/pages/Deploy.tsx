"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/Logo_white.png';
import BrainImg from '../assets/Brain.png';
import { useLang } from '../i18n/LangContext';
import { translations } from '../i18n/translations';

export default function DeployPage() {
    const { lang } = useLang();
    const t = translations[lang].deploy;

    return (
        <div className="min-h-screen bg-transparent text-white flex flex-col font-sans selection:bg-[#10B981]/30">
            <main className="flex-1 flex items-center justify-center px-6 pb-20 pt-32">
                <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] group">
                            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                                <Link href="/" className="inline-block">
                                    <Image src={LogoWhite} alt="Logo" width={100} height={100} className="w-auto h-10" />
                                </Link>

                                <div className="max-w-[420px]">
                                    <h2 className="text-xl md:text-3xl font-light tracking-tight leading-[1.1] mb-0">
                                        {t.cardHeadingStart} <span className="text-[#10B981] relative">
                                            {t.cardHeadingGreen}
                                            <span className="absolute bottom-1 left-0 w-full h-px bg-[#10B981]/30"></span>
                                        </span> {t.cardHeadingEnd}
                                    </h2>
                                </div>
                            </div>

                            {/* Background Image (Brain) */}
                            <div className="absolute -bottom-[50%] -right-[45%] w-[150%] h-[150%] z-10 opacity-20 mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                                <img
                                    src={BrainImg.src}
                                    alt="Background Graphic"
                                    className="w-full h-full object-contain"
                                    style={{ filter: 'hue-rotate(-20deg) saturate(1.5) brightness(0.8)' }}
                                />
                                <div className="absolute inset-0 bg-gradient-radial from-[#10B981]/20 to-transparent blur-3xl opacity-50"></div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full border border-white/5 rounded-[3.5rem] z-30 pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Right: Signup Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col max-w-[480px] lg:max-w-none lg:pl-12"
                    >
                        <div className="mb-12">
                            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
                                {t.formHeadingStart} <span className="text-[#10B981]">{t.formHeadingGreen}</span>
                            </h1>
                            <p className="text-white/40 text-lg font-light">{t.formSubtitle}</p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelEmail}</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-[#0A0A0C] border border-white/[0.08] rounded-2xl px-6 py-5 text-lg font-light placeholder:text-white/10 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300 shadow-inner"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelPassword}</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-[#0A0A0C] border border-white/[0.08] rounded-2xl px-6 py-5 text-lg font-light placeholder:text-white/10 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300 shadow-inner"
                                />
                            </div>

                            <div className="pt-4">
                                <button className="w-full bg-gradient-to-r from-[#0B3D2E] to-[#0A2821] border border-[#10B981]/20 text-white font-medium py-5 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:border-[#10B981]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 cursor-pointer text-lg">
                                    {t.submitCta}
                                </button>
                            </div>
                        </form>

                        <div className="mt-12 text-center lg:text-left">
                            <p className="text-white/30 font-light">
                                {t.loginPrompt} <Link href="#" className="text-[#10B981] hover:text-[#10B981]/80 transition-colors duration-300 ml-1 underline underline-offset-4 decoration-[#10B981]/30 hover:decoration-[#10B981]">{t.loginCta}</Link>
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#10B981]/[0.03] blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#10B981]/[0.02] blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
}
