"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SolutionImg from '../assets/Solution.png';
import BrainImg from '../assets/Brain.png';

export default function ProductPage() {
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
                        The <span className="text-[#42C971]">Intelligent</span> Lead Engine.
                    </h1>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        Our proprietary filtering system replaces human manual qualification with real-time algorithmic precision.
                        Every lead is analyzed, scored, and prioritized in under 60 seconds.
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
                        <h2 className="text-3xl md:text-4xl font-normal mb-6">Neural Lead Scoring</h2>
                        <p className="text-white/40 text-lg mb-8 font-light">
                            Using deep learning models trained on millions of high-converting B2B interactions,
                            Cataly AI identifies "ready-to-buy" signals that traditional CRM systems miss.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Behavioral Intent Analysis",
                                "Firmographic Data Enrichment",
                                "Predictive Conversion Scoring",
                                "Automated Outreach Triggers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#42C971]" />
                                    <span className="text-white/70 font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[3rem] border border-white/[0.05] bg-white/[0.01] flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-radial from-[#42C971]/10 to-transparent"></div>
                        <img src={SolutionImg.src} alt="Lead Filtering Diagram" className="relative z-10 w-[80%] opacity-80" />
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
                        <h3 className="text-4xl font-medium mb-6">Zero Latency Integration</h3>
                        <p className="text-white/50 text-lg font-light mb-10">
                            Deploy our infrastructure directly into your current stack. Our API-first approach ensures
                            that your data flows seamlessly between your acquisition channels and your sales floor without a single millisecond of delay.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#42C971]/40 hover:bg-white/10 transition-all duration-300">
                            View API Documentation
                        </button>
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-30 mix-blend-screen">
                        <img src={BrainImg.src} alt="Brain" className="w-full h-full object-contain" style={{ filter: 'hue-rotate(-40deg)' }} />
                    </div>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#42C971]/[0.01] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
