"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { translations } from '../i18n/translations';

export default function RequestDemoPage() {
    const { lang } = useLang();
    const t = translations[lang].requestDemo;

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        {t.heroHeadingStart} <span className="text-[#10B981]">{t.heroHeadingGreen}</span>.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-8 md:p-12 rounded-[3.5rem] border border-white/[0.08] bg-[#0A0A0A] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-[#10B981]/5 to-transparent pointer-events-none"></div>

                    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelName}</label>
                                <input
                                    type="text"
                                    placeholder={t.placeholderName}
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelEmail}</label>
                                <input
                                    type="email"
                                    placeholder={t.placeholderEmail}
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelCompany}</label>
                                <input
                                    type="text"
                                    placeholder={t.placeholderCompany}
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">{t.labelSize}</label>
                                <select className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white/70 font-light focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300 appearance-none">
                                    {t.sizeOptions.map((opt, i) => (
                                        <option key={i} className="bg-[#0A0A0A]">{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-normal text-white/50 ml-1">{t.labelMessage}</label>
                            <textarea
                                rows={4}
                                placeholder={t.placeholderMessage}
                                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/20 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-[#0B3D2E] to-[#0A2821] border border-[#10B981]/20 text-white font-medium py-5 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:border-[#10B981]/40 hover:scale-[1.005] active:scale-[0.99] transition-all duration-500 cursor-pointer text-lg">
                                {t.submitCta}
                            </button>
                        </div>
                        <p className="text-center text-white/30 text-xs font-light">
                            {t.disclaimer}
                        </p>
                    </form>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#10B981]/[0.03] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
