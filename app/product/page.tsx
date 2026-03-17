"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import BrainImg from '../assets/Brain.png';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';
import { translations } from '../i18n/translations';

export default function ProductPage() {
    const { lang } = useLang();
    const { theme } = useTheme();
    const t = translations[lang].product;
    const splineScene = theme === 'light'
        ? 'https://prod.spline.design/iDL6mmqbgpFmysa7/scene.splinecode'
        : 'https://prod.spline.design/aNI0aH6YkA2CO6WA/scene.splinecode';

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero section for Product */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        {t.heroHeadingStart} <span className="text-[#10B981]">{t.heroHeadingGreen}</span> {t.heroHeadingEnd}
                    </h1>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                {/* Feature Grid Style */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-normal mb-6">{t.scoringHeading}</h2>
                        <p className="text-white/40 text-lg mb-8 font-light">
                            {t.scoringBody}
                        </p>
                        <ul className="space-y-4">
                            {t.scoringItems.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                                    <span className="text-white/70 font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] border border-white/[0.05] bg-white/[0.01] overflow-hidden" style={{ aspectRatio: '16/9' }}
                    >
                        <Spline scene={splineScene} style={{ width: '100%', height: '100%' }} />
                    </motion.div>
                </div>

                {/* Technical Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full rounded-[3rem] border border-white/[0.08] bg-[#0A0A0A] p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-4xl font-medium mb-6">{t.integrationHeading}</h3>
                        <p className="text-white/50 text-lg font-light mb-10">
                            {t.integrationBody}
                        </p>
                        <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#10B981]/40 hover:bg-white/10 transition-all duration-300">
                            {t.integrationCta}
                        </button>
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-30 mix-blend-screen">
                        <img src={BrainImg.src} alt="Brain" className="w-full h-full object-contain" style={{ filter: 'hue-rotate(-40deg)' }} />
                    </div>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#10B981]/[0.02] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#10B981]/[0.01] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
