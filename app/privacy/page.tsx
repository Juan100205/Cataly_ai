"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { translations } from '../i18n/translations';

export default function PrivacyPage() {
    const { lang } = useLang();
    const t = translations[lang].privacy;

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                        {t.heroHeadingStart} <span className="text-[#10B981]">{t.heroHeadingGreen}</span>.
                    </h1>
                    <p className="text-white/40 text-lg font-light">{t.lastUpdated}</p>
                </motion.div>

                <div className="space-y-16">
                    {t.sections.map((section, i) => (
                        <section key={i}>
                            <h2 className="text-2xl font-medium mb-6 text-white/90">{section.heading}</h2>
                            <p className="text-white/50 leading-relaxed font-light">{section.body}</p>
                        </section>
                    ))}

                    <section className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
                        <h2 className="text-2xl font-medium mb-4 text-[#10B981]">{t.rightsHeading}</h2>
                        <p className="text-white/50 leading-relaxed font-light">
                            {t.rightsBody}
                        </p>
                    </section>
                </div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#10B981]/[0.02] blur-[150px] rounded-full"></div>
            </div>
        </div>
    );
}
