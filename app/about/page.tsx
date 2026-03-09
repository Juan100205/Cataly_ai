"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { translations } from '../i18n/translations';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-12 border-l-2 border-[#10B981] pl-6 ml-2">
        <h2 className="text-3xl font-medium text-white mb-2">{title}</h2>
        <p className="text-white/40 font-light">{subtitle}</p>
    </div>
);

export default function AboutPage() {
    const { lang } = useLang();
    const t = translations[lang].about;

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        {t.heroHeadingStart} <span className="text-[#10B981]">{t.heroHeadingGreen}</span>{t.heroHeadingEnd ? ` ${t.heroHeadingEnd}` : ''}
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader title={t.missionTitle} subtitle={t.missionSubtitle} />
                        <p className="text-lg text-white/50 font-light leading-relaxed">
                            {t.missionBody}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader title={t.visionTitle} subtitle={t.visionSubtitle} />
                        <p className="text-lg text-white/50 font-light leading-relaxed">
                            {t.visionBody}
                        </p>
                    </motion.div>
                </div>

                {/* History */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-40"
                >
                    <SectionHeader title={t.storyTitle} subtitle={t.storySubtitle} />
                    <div className="p-12 rounded-[3.5rem] border border-white/[0.08] bg-[#0A0A0A] relative overflow-hidden">
                        <div className="max-w-3xl relative z-10">
                            <p className="text-white/50 text-lg font-light leading-loose mb-6">
                                {t.storyBody1}
                            </p>
                            <p className="text-white/50 text-lg font-light leading-loose">
                                {t.storyBody2}
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 blur-xl pointer-events-none">
                            <span className="text-[20rem] font-bold tracking-tighter text-[#10B981] select-none">2026</span>
                        </div>
                    </div>
                </motion.div>

                {/* Meet Our Team */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <SectionHeader title={t.teamTitle} subtitle={t.teamSubtitle} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.members.map((member, i) => (
                            <div key={i} className="group p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/[0.08] hover:border-[#10B981]/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)] transition-all duration-500 flex flex-col items-start h-full">
                                <div className="w-20 h-20 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-8 group-hover:scale-110 group-hover:bg-[#10B981]/20 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#10B981] transition-colors">{member.name}</h3>
                                <p className="text-[#10B981]/60 text-sm font-medium tracking-wide mb-6 uppercase">{member.role}</p>

                                <p className="text-white/40 text-base font-light mb-8 leading-relaxed flex-grow">
                                    {member.bio}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {member.expertise.map((skill, si) => (
                                        <span key={si} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 uppercase tracking-tighter">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-2 text-[#10B981] text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                                    <span>@{member.link}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-[#10B981]/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#10B981]/[0.02] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
