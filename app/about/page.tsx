"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-12 border-l-2 border-[#42C971] pl-6 ml-2">
        <h2 className="text-3xl font-medium text-white mb-2">{title}</h2>
        <p className="text-white/40 font-light">{subtitle}</p>
    </div>
);

export default function AboutPage() {
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
                        The Future of <span className="text-[#42C971]">Algorithmic</span> Growth.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Cataly AI was founded to bridge the gap between human intuition and biological latency.
                        We build the neural infrastructure that powers the next generation of enterprises.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader title="Our Mission" subtitle="Accelerating global revenue reactivation." />
                        <p className="text-lg text-white/50 font-light leading-relaxed">
                            To empower every company with a tireless, intelligent operational brain.
                            We eliminate the concept of "missed opportunities" by ensuring every interaction is handled with clinical precision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader title="Our Vision" subtitle="A world without operational friction." />
                        <p className="text-lg text-white/50 font-light leading-relaxed">
                            We envision a future where business scale is no longer limited by human bandwidth.
                            A world where companies grow exponentially through perfectly optimized neural workflows.
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
                    <SectionHeader title="Our Story" subtitle="From concept to infrastructure." />
                    <div className="p-12 rounded-[3.5rem] border border-white/[0.08] bg-[#0A0A0A] relative overflow-hidden">
                        <div className="max-w-3xl relative z-10">
                            <p className="text-white/50 text-lg font-light leading-loose mb-6">
                                Born from the intersection of deep automation and marketing intelligence, Cataly AI emerged
                                as a response to a global problem: $2 trillion in lost revenue due to slow response times.
                            </p>
                            <p className="text-white/50 text-lg font-light leading-loose">
                                Today, we process millions of interactions monthly, serving as the hidden neural layer
                                for agencies and enterprises who refuse to settle for human-speed growth.
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 blur-xl pointer-events-none">
                            <span className="text-[20rem] font-bold tracking-tighter text-[#42C971] select-none">2026</span>
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
                    <SectionHeader title="Meet Our Team" subtitle="The architects behind the brain." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Julian Riano",
                                role: "Founder & Chief Architect",
                                bio: "Visionary specialized in neural infrastructure and enterprise scale automation architectures.",
                                expertise: ["System Design", "AI Strategy"],
                                link: "RianoDev"
                            },
                            {
                                name: "Alex Chen",
                                role: "Lead Neural Engineer",
                                bio: "Expert in deep learning models and high-frequency data processing pipelines.",
                                expertise: ["PyTorch", "Data Science"],
                                link: "Neural_Alex"
                            },
                            {
                                name: "Sarah Miller",
                                role: "Head of Growth Ops",
                                bio: "Specialized in operational scaling and multi-channel revenue reactivation logic.",
                                expertise: ["Growth Ops", "RevOps"],
                                link: "Sarah_Growth"
                            },
                        ].map((member, i) => (
                            <div key={i} className="group p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/[0.08] hover:border-[#42C971]/40 hover:shadow-[0_20px_60px_rgba(66,201,113,0.1)] transition-all duration-500 flex flex-col items-start h-full">
                                <div className="w-20 h-20 rounded-2xl bg-[#42C971]/10 flex items-center justify-center text-[#42C971] mb-8 group-hover:scale-110 group-hover:bg-[#42C971]/20 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#42C971] transition-colors">{member.name}</h3>
                                <p className="text-[#42C971]/60 text-sm font-medium tracking-wide mb-6 uppercase">{member.role}</p>

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

                                <div className="flex items-center space-x-2 text-[#42C971] text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="w-1 h-1 rounded-full bg-[#42C971]" />
                                    <span>@{member.link}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-[#42C971]/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
