"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SolutionImg from '../assets/Solution.png';
import { useLang } from '../i18n/LangContext';
import { useDemoModal } from '../i18n/DemoModalContext';

// Abstract node topology — replaces the brain image
const NodeTopology = () => (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Primary edges */}
        <line x1="110" y1="110" x2="55" y2="58" stroke="#10B981" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="110" y1="110" x2="168" y2="68" stroke="#10B981" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="110" y1="110" x2="58" y2="162" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" />
        <line x1="110" y1="110" x2="172" y2="152" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" />

        {/* Secondary edges */}
        <line x1="55" y1="58" x2="18" y2="28" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="168" y1="68" x2="202" y2="38" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="172" y1="152" x2="202" y2="182" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="58" y1="162" x2="28" y2="196" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />

        {/* Cross edges */}
        <line x1="55" y1="58" x2="168" y2="68" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="58" y1="162" x2="172" y2="152" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />

        {/* Central glow */}
        <circle cx="110" cy="110" r="32" fill="url(#nodeGlow)" />

        {/* Secondary nodes */}
        <circle cx="55" cy="58" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="55" cy="58" r="3" fill="#10B981" fillOpacity="0.5" />

        <circle cx="168" cy="68" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="168" cy="68" r="3" fill="#10B981" fillOpacity="0.5" />

        <circle cx="58" cy="162" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="58" cy="162" r="3" fill="#10B981" fillOpacity="0.5" />

        <circle cx="172" cy="152" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="172" cy="152" r="3" fill="#10B981" fillOpacity="0.5" />

        {/* Micro nodes */}
        <circle cx="18" cy="28" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="202" cy="38" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="202" cy="182" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="28" cy="196" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />

        {/* Central node */}
        <circle cx="110" cy="110" r="14" fill="none" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.85" />
        <circle cx="110" cy="110" r="8" fill="#10B981" fillOpacity="0.65" />
        <circle cx="110" cy="110" r="4" fill="#10B981" />
    </svg>
);

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLang();
    const { open } = useDemoModal();
    const s = t.solution;

    const { scrollYProgress: rawProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scrollYProgress = useSpring(rawProgress, {
        stiffness: 22,
        damping: 45,
        mass: 1.0,
        restDelta: 0.0005
    });

    const diagramOpacity = useTransform(scrollYProgress, [0.05, 0.22], [1, 0]);
    const diagramScale   = useTransform(scrollYProgress, [0.05, 0.22], [1, 1.03]);

    const mainCardY = useTransform(scrollYProgress, [0.18, 0.34], [70, 0]);
    const mainCardO = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
    const mainCardS = useTransform(scrollYProgress, [0.18, 0.34], [0.96, 1]);

    const secCard1Y = useTransform(scrollYProgress, [0.30, 0.46], [60, 0]);
    const secCard1O = useTransform(scrollYProgress, [0.30, 0.44], [0, 1]);
    const secCard1S = useTransform(scrollYProgress, [0.30, 0.46], [0.97, 1]);

    const secCard2Y = useTransform(scrollYProgress, [0.42, 0.57], [50, 0]);
    const secCard2O = useTransform(scrollYProgress, [0.42, 0.55], [0, 1]);
    const secCard2S = useTransform(scrollYProgress, [0.42, 0.57], [0.97, 1]);

    const secCard3Y = useTransform(scrollYProgress, [0.54, 0.69], [50, 0]);
    const secCard3O = useTransform(scrollYProgress, [0.54, 0.67], [0, 1]);
    const secCard3S = useTransform(scrollYProgress, [0.54, 0.69], [0.97, 1]);

    return (
        <div ref={containerRef} className="w-full h-[140vh] relative pt-6 rounded-3xl" style={{ isolation: 'isolate' }}>
            <div className="sticky top-8 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Header */}
                <div className="text-center mb-6 md:mb-3 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-tight text-white mb-4">
                        {s.headingStart}{s.headingGreen && ` ${s.headingGreen}`}{s.headingEnd && ` ${s.headingEnd}`}
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        {s.subheading}
                    </p>
                </div>

                {/* Display Area */}
                <div className="relative w-full max-w-[1020px] h-[510px] rounded-[2rem] overflow-hidden glass-card" style={{ background: 'transparent' }}>

                    {/* Background Graphic */}
                    <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none will-change-transform"
                        style={{ opacity: diagramOpacity, scale: diagramScale }}
                    >
                        <img src={SolutionImg.src} alt="Diagram" />
                    </motion.div>

                    {/* Grid */}
                    <div className="absolute inset-0 z-20 w-full h-full p-3 md:p-4 flex flex-col md:flex-row gap-4 md:gap-5 overflow-y-auto md:overflow-hidden">

                        {/* Left Big Card */}
                        <motion.div
                            style={{ opacity: mainCardO, y: mainCardY, scale: mainCardS }}
                            className="glass-card glass-hover w-full md:w-[45%] min-h-[240px] md:min-h-0 rounded-[2rem] overflow-hidden relative flex flex-col justify-between cursor-pointer will-change-transform"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="p-8 z-10 relative">
                                <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                                    <span className="text-[#10B981]">{s.mainCard.line1}</span><br />
                                    <span className="text-white">{s.mainCard.line2}</span><br />
                                    <span className="text-white">{s.mainCard.line3}</span>
                                </h3>
                                <p className="text-sm text-white/60 max-w-[210px] font-light leading-relaxed">
                                    {s.mainCard.body}
                                </p>
                            </div>
                            <div className="px-8 pb-8 z-10 relative w-fit">
                                <button onClick={open} className="glass-btn text-sm cursor-pointer">
                                    {s.mainCard.cta}
                                </button>
                            </div>

                            {/* Node Topology — replaces brain */}
                            <div className="absolute -bottom-6 -right-6 w-[210px] h-[210px] opacity-80 z-0 pointer-events-none">
                                <NodeTopology />
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-5">

                            <motion.div
                                style={{ opacity: secCard1O, y: secCard1Y, scale: secCard1S }}
                                className="glass-card glass-hover flex-1 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden cursor-pointer will-change-transform"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0"></div>
                                <h3 className="text-2xl md:text-3xl font-normal text-white mb-3 leading-snug relative z-10">
                                    <span className="text-[#10B981]">{s.secCard1.titleGreen}</span>
                                    {s.secCard1.titleLine1}<br />
                                    {s.secCard1.titleLine2}
                                </h3>
                                <p className="text-sm text-white/60 font-light leading-relaxed max-w-lg relative z-10">
                                    {s.secCard1.body}
                                </p>
                            </motion.div>

                            <motion.div
                                style={{ opacity: secCard2O, y: secCard2Y, scale: secCard2S }}
                                className="glass-card glass-hover h-[120px] rounded-2xl p-6 flex flex-col justify-center cursor-pointer will-change-transform"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-1.5 leading-snug">
                                    {s.secCard2.titleHead}<span className="text-[#10B981]">{s.secCard2.titleGreen}</span>
                                </h3>
                                <p className="text-sm text-white/60 font-light leading-relaxed max-w-xl">
                                    {s.secCard2.body}
                                </p>
                            </motion.div>

                            <motion.div
                                style={{ opacity: secCard3O, y: secCard3Y, scale: secCard3S }}
                                className="glass-card glass-hover h-[120px] rounded-2xl p-6 flex flex-col justify-center cursor-pointer will-change-transform"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-1.5 leading-snug">
                                    {s.secCard3.titleHead}<span className="text-[#10B981]">{s.secCard3.titleGreen}</span>{s.secCard3.titleTail}
                                </h3>
                                <p className="text-sm text-white/60 font-light leading-relaxed max-w-xl">
                                    {s.secCard3.body}
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
