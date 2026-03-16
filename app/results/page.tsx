"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { translations } from '../i18n/translations';
import CountUp, { parseMetric } from '../components/CountUp';

const StatCard = ({ value, label, delay = 0 }: { value: string, label: string, delay?: number }) => {
    const { prefix, end, suffix, decimals } = parseMetric(value);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl"
        >
            <span className="text-6xl md:text-8xl font-medium tracking-tighter text-[#10B981] mb-4">
                <CountUp end={end} prefix={prefix} suffix={suffix} decimals={decimals} duration={2.4} />
            </span>
            <span className="text-sm md:text-base text-white/40 tracking-widest uppercase font-light text-center">{label}</span>
        </motion.div>
    );
};

export default function ResultsPage() {
    const { lang } = useLang();
    const t = translations[lang].results;

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        {t.heroHeadingStart} <span className="text-[#10B981]">{t.heroHeadingGreen}</span>.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <StatCard value={t.stat1Value} label={t.stat1Label} />
                    <StatCard value={t.stat2Value} label={t.stat2Label} delay={0.1} />
                    <StatCard value={t.stat3Value} label={t.stat3Label} delay={0.2} />
                </div>

                {/* Case Study Grid */}
                <div className="space-y-12 mb-32">
                    <h2 className="text-3xl font-normal text-white/80 border-l-2 border-[#10B981] pl-6 ml-2">{t.caseStudiesHeading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.cases.map((caseStudy, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] border border-white/[0.08] bg-[#0A0A0A] hover:border-[#10B981]/30 transition-all duration-500"
                            >
                                <div className="text-[#10B981] text-xs font-medium tracking-widest uppercase mb-4 opacity-50">{t.caseLabel}</div>
                                <h3 className="text-2xl font-medium mb-4">{caseStudy.title}</h3>
                                <p className="text-white/40 font-light leading-relaxed mb-8">{caseStudy.desc}</p>
                                <div className="text-3xl font-light text-white/90">{caseStudy.result}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Transparency Section */}
                <div className="text-center p-20 rounded-[3.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">
                    <div className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#10B981]">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">{t.testimonial}</p>
                </div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#10B981]/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#10B981]/[0.01] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
