"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import SolutionImg from '../assets/Solution.png';
import BrainImg from '../assets/Brain.png';

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: rawProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Spring-smooth: stiffness baja + damping alto + masa = frenado suave orgánico
    const scrollYProgress = useSpring(rawProgress, {
        stiffness: 35,
        damping: 30,
        mass: 1.5,
        restDelta: 0.0005
    });

    // ANIMATION MAP — timing acelerado
    // Phase 0: 0.0  -> 0.08  → Clean image view
    // Phase 1: 0.08 -> 0.24  → Image fades out fast
    const diagramOpacity = useTransform(scrollYProgress, [0.08, 0.24], [1, 0]);

    // Main Card — reveal más temprano y más rápido
    const mainCardY = useTransform(scrollYProgress, [0.20, 0.38], [140, 0]);
    const mainCardO = useTransform(scrollYProgress, [0.20, 0.36], [0, 1]);

    // Secondary Card 1
    const secCard1Y = useTransform(scrollYProgress, [0.36, 0.54], [120, 0]);
    const secCard1O = useTransform(scrollYProgress, [0.36, 0.52], [0, 1]);

    // Secondary Card 2
    const secCard2Y = useTransform(scrollYProgress, [0.52, 0.70], [100, 0]);
    const secCard2O = useTransform(scrollYProgress, [0.52, 0.68], [0, 1]);

    // Secondary Card 3 (final reveal)
    const secCard3Y = useTransform(scrollYProgress, [0.68, 0.85], [100, 0]);
    const secCard3O = useTransform(scrollYProgress, [0.68, 0.83], [0, 1]);

    return (
        // 300vh allows enough scroll distance to sequentially fade out the bg and show the grid
        <div ref={containerRef} className="w-full h-[400vh] relative pt-6 rounded-3xl" style={{ isolation: 'isolate' }}>

            {/* Sticky container to keep content on screen while scrolling */}
            <div className="sticky top-10 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12">

                {/* Header Section */}
                <div className="text-center mb-2 px-4 z-40">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white mb-6">
                        The <span className="text-[#42C971]">Neural Infrastructure</span> for Revenue.
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                        Replace human latency with algorithmic precision. Cataly AI deploys an operational brain that captures, qualifies, and closes opportunities in milliseconds.
                    </p>
                </div>

                {/* Dynamic Display Area */}
                <div className="relative w-full max-w-[1200px] h-[600px] flex items-center justify-center">

                    {/* BACKGROUND GRAPHIC (The Neural Connections) - Fades OUT */}
                    <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none rounded-[2rem] border border-white/[0.05] bg-white/[0.01] overflow-hidden"
                        style={{ opacity: diagramOpacity }}
                    >
                        <img src={SolutionImg.src} alt="Diagram" />
                    </motion.div>

                    {/* GRID CONFIGURATION (Fades IN) */}
                    <div className="absolute inset-0 z-20 w-full h-full p-4 flex gap-6">

                        {/* Left Big Card */}
                        <motion.div
                            style={{ opacity: mainCardO, y: mainCardY }}
                            className="w-[45%] rounded-[2.5rem] border border-white/[0.08] bg-[#0A0A0A] overflow-hidden relative shadow-2xl flex flex-col justify-between cursor-pointer"
                            whileHover={{ boxShadow: '0 0 32px rgba(66,201,113,0.25)', borderColor: 'rgba(66,201,113,0.25)', scale: 1.015 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="p-10 z-10">
                                <h3 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
                                    <span className="text-[#42C971]">Intelligent</span><br />
                                    <span className="text-white">Lead</span><br />
                                    <span className="text-white">Filtering</span>
                                </h3>
                                <p className="text-sm text-white/50 max-w-[250px] font-light leading-relaxed">
                                    Not all prospects are equal. Our AI analyzes lead quality in real time and prioritizes conversations with the highest closing probability.
                                </p>
                            </div>

                            <div className="px-10 pb-10 z-10 w-fit">
                                <Link href="/deploy">
                                    <button className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/80 hover:bg-white/10 transition backdrop-blur-md cursor-pointer hover:shadow-[0_0_20px_rgba(66,201,113,0.35)] hover:border-[#42C971]/30" style={{ transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}>
                                        Deploy System
                                    </button>
                                </Link>
                            </div>

                            {/* Glowing Brain Background */}
                            <div className="absolute -bottom-10 -right-10 w-[260px] h-[260px] opacity-70 z-0 mix-blend-screen pointer-events-none">
                                <img src={BrainImg.src} alt="Brain" className="w-full h-full object-cover" style={{ filter: 'hue-rotate(-40deg) saturate(2)' }} />
                                {/* Green Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-radial from-[#42C971]/30 to-transparent blur-3xl mix-blend-screen"></div>
                            </div>
                        </motion.div>

                        {/* Right Side Column (3 Stacked Cards) */}
                        <div className="w-[55%] flex flex-col gap-6">

                            {/* Secondary Card 1 */}
                            <motion.div
                                style={{ opacity: secCard1O, y: secCard1Y }}
                                className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-10 flex flex-col justify-center shadow-xl relative overflow-hidden cursor-pointer"
                                whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                                <h3 className="text-3xl md:text-4xl font-normal text-white mb-4 leading-snug relative z-10">
                                    <span className="text-[#42C971]">Automated</span> Revenue<br />Pipeline.
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed max-w-lg relative z-10">
                                    The system doesn't just talk — it acts. It books appointments directly into your calendar and notifies your team only when the deal is ready to close.
                                </p>
                            </motion.div>

                            {/* Secondary Card 2 */}
                            <motion.div
                                style={{ opacity: secCard2O, y: secCard2Y }}
                                className="h-[140px] rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-8 flex flex-col justify-center shadow-xl cursor-pointer"
                                whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl md:text-3xl font-normal text-white mb-2 leading-snug">
                                    Enterprise-Grade <span className="text-[#42C971]">Privacy</span>
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed max-w-xl">
                                    Protected architecture with end-to-end encryption. Your data is a critical asset, and we treat it with global compliance standards.
                                </p>
                            </motion.div>

                            {/* Secondary Card 3 */}
                            <motion.div
                                style={{ opacity: secCard3O, y: secCard3Y }}
                                className="h-[140px] rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-8 flex flex-col justify-center shadow-xl cursor-pointer"
                                whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl md:text-3xl font-normal text-white mb-2 leading-snug">
                                    Zero <span className="text-[#42C971]">Latency</span> Response.
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed max-w-xl">
                                    We eliminate waiting time. The system contacts every lead in under 60 seconds, ensuring buying intent remains at 100%.
                                </p>
                            </motion.div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
