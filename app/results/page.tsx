"use client";

import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, delay = 0 }: { value: string, label: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl"
    >
        <span className="text-6xl md:text-8xl font-medium tracking-tighter text-[#42C971] mb-4">{value}</span>
        <span className="text-sm md:text-base text-white/40 tracking-widest uppercase font-light text-center">{label}</span>
    </motion.div>
);

export default function ResultsPage() {
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
                        Measurable <span className="text-[#42C971]">Impact</span>.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        We don't just deploy technology; we deliver quantifiable growth.
                        Our results are etched in data and validated by global enterprise benchmarks.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <StatCard value="40%+" label="Lead Reactivation" />
                    <StatCard value="<60s" label="Response Latency" delay={0.1} />
                    <StatCard value="99.9%" label="Infra Availability" delay={0.2} />
                </div>

                {/* Case Study Grid */}
                <div className="space-y-12 mb-32">
                    <h2 className="text-3xl font-normal text-white/80 border-l-2 border-[#42C971] pl-6 ml-2">Legacy Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Global SaaS Expansion",
                                desc: "Automated the qualification of 50,000+ monthly inbound leads, increasing sales velocity by 3.4x.",
                                result: "+$12M ARR"
                            },
                            {
                                title: "FinTech Reactivation",
                                desc: "Revived a stagnant database of 200k leads through multi-channel conversational AI flows.",
                                result: "62% Conversion"
                            }
                        ].map((caseStudy, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] border border-white/[0.08] bg-[#0A0A0A] hover:border-[#42C971]/30 transition-all duration-500"
                            >
                                <div className="text-[#42C971] text-xs font-medium tracking-widest uppercase mb-4 opacity-50">Operational Success</div>
                                <h3 className="text-2xl font-medium mb-4">{caseStudy.title}</h3>
                                <p className="text-white/40 font-light leading-relaxed mb-8">{caseStudy.desc}</p>
                                <div className="text-3xl font-light text-white/90">{caseStudy.result}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust Section */}
                <div className="text-center p-20 rounded-[3.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">
                    <h3 className="text-2xl font-light text-white/60 mb-8 italic">"Cataly AI transformed our dead pipeline into a predictable revenue machine in less than 30 days."</h3>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 mb-4 overflow-hidden border border-[#42C971]/30">
                            {/* Small brain icon or profile */}
                            <div className="w-full h-full bg-[#42C971]/20 flex items-center justify-center text-[#42C971] text-xs font-bold">CT</div>
                        </div>
                        <span className="text-white font-medium">Chief Technology Officer</span>
                        <span className="text-white/30 text-sm">Fortune 500 Enterprise</span>
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#42C971]/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#42C971]/[0.01] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
