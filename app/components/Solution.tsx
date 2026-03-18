"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLang } from '../i18n/LangContext';
import { useDemoModal } from '../i18n/DemoModalContext';
import { useTheme } from '../i18n/ThemeContext';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const NodeTopology = () => (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
        </defs>
        <line x1="110" y1="110" x2="55" y2="58" stroke="#10B981" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="110" y1="110" x2="168" y2="68" stroke="#10B981" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="110" y1="110" x2="58" y2="162" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" />
        <line x1="110" y1="110" x2="172" y2="152" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" />
        <line x1="55" y1="58" x2="18" y2="28" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="168" y1="68" x2="202" y2="38" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="172" y1="152" x2="202" y2="182" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="58" y1="162" x2="28" y2="196" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="55" y1="58" x2="168" y2="68" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="58" y1="162" x2="172" y2="152" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="110" cy="110" r="32" fill="url(#nodeGlow)" />
        <circle cx="55" cy="58" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="55" cy="58" r="3" fill="#10B981" fillOpacity="0.5" />
        <circle cx="168" cy="68" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="168" cy="68" r="3" fill="#10B981" fillOpacity="0.5" />
        <circle cx="58" cy="162" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="58" cy="162" r="3" fill="#10B981" fillOpacity="0.5" />
        <circle cx="172" cy="152" r="6" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.65" />
        <circle cx="172" cy="152" r="3" fill="#10B981" fillOpacity="0.5" />
        <circle cx="18" cy="28" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="202" cy="38" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="202" cy="182" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="28" cy="196" r="3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.28" />
        <circle cx="110" cy="110" r="14" fill="none" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.85" />
        <circle cx="110" cy="110" r="8" fill="#10B981" fillOpacity="0.65" />
        <circle cx="110" cy="110" r="4" fill="#10B981" />
    </svg>
);

function DesktopSolution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLang();
    const { open } = useDemoModal();
    const s = t.solution;

    const { theme } = useTheme();
    const hoverScale = theme === 'light' ? {} : { scale: 1.02 };
    const splineScene = theme === 'light'
        ? 'https://prod.spline.design/iDL6mmqbgpFmysa7/scene.splinecode'
        : 'https://prod.spline.design/aNI0aH6YkA2CO6WA/scene.splinecode';


    const { scrollYProgress: rawProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const scrollYProgress = useSpring(rawProgress, { stiffness: 40, damping: 65, mass: 0.8, restDelta: 0.001 });

    const diagramOpacity = useTransform(scrollYProgress, [0.05, 0.22], [1, 0.18]);
    const diagramScale   = useTransform(scrollYProgress, [0.05, 0.22], [1, 1.03]);
    const mainCardY = useTransform(scrollYProgress, [0.18, 0.34], [70, 0]);
    const mainCardO = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
    const mainCardS = useTransform(scrollYProgress, [0.18, 0.34], [0.96, 1]);
    // sec cards 2 & 3 share the same stagger offset — reuse one set each
    const secCard1Y = useTransform(scrollYProgress, [0.30, 0.46], [60, 0]);
    const secCard1O = useTransform(scrollYProgress, [0.30, 0.44], [0, 1]);
    const secCard1S = useTransform(scrollYProgress, [0.30, 0.46], [0.97, 1]);
    const secCard23Y = useTransform(scrollYProgress, [0.42, 0.57], [50, 0]);
    const secCard23O = useTransform(scrollYProgress, [0.42, 0.55], [0, 1]);
    const secCard23S = useTransform(scrollYProgress, [0.42, 0.57], [0.97, 1]);

    return (
        <div ref={containerRef} className="has-sticky w-full h-[130vh] relative pt-6 rounded-3xl" style={{ isolation: 'isolate' }}>
            <div className="sticky top-8 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="text-center mb-4 px-4">
                    <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-white mb-3">
                        {s.headingStart}{s.headingGreen && ` ${s.headingGreen}`}{s.headingEnd && ` ${s.headingEnd}`}
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto font-light leading-relaxed">{s.subheading}</p>
                </div>

                <div className="relative w-full max-w-[1020px] h-[510px] rounded-[2rem] overflow-hidden glass-card" style={{ background: 'transparent' }}>
                    <motion.div className="absolute z-10 will-change-transform" style={{ opacity: diagramOpacity, scale: diagramScale, inset: '-10%' }}>
                        <Spline scene={splineScene} className="w-full h-full" />
                    </motion.div>

                    <div className="absolute inset-0 z-20 w-full h-full p-3 md:p-4 flex flex-col md:flex-row gap-4 md:gap-5 overflow-hidden">
                        <motion.div style={{ opacity: mainCardO, y: mainCardY, scale: mainCardS }}
                            className="glass-card glass-hover w-full md:w-[45%] min-h-[200px] md:min-h-0 rounded-[2rem] overflow-hidden relative flex flex-col justify-between cursor-pointer will-change-transform"
                            whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="p-6 z-10 relative">
                                <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-4">
                                    <span className="text-[#10B981]">{s.mainCard.line1}</span><br />
                                    <span className="text-white">{s.mainCard.line2}</span><br />
                                    <span className="text-white">{s.mainCard.line3}</span>
                                </h3>
                                <p className="text-sm text-white/60 max-w-[210px] font-light leading-relaxed">{s.mainCard.body}</p>
                            </div>
                            <div className="px-6 pb-6 z-10 relative w-fit">
                                <button onClick={open} className="glass-btn text-sm cursor-pointer">{s.mainCard.cta}</button>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-[210px] h-[210px] opacity-80 z-0 pointer-events-none">
                                <NodeTopology />
                            </div>
                        </motion.div>

                        <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-5">
                            <motion.div style={{ opacity: secCard1O, y: secCard1Y, scale: secCard1S }}
                                className="glass-card glass-hover flex-1 rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden cursor-pointer will-change-transform"
                                whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-2 leading-snug relative z-10">
                                    <span className="text-[#10B981]">{s.secCard1.titleGreen}</span>{s.secCard1.titleLine1}<br />{s.secCard1.titleLine2}
                                </h3>
                                <p className="text-sm text-white/60 font-light leading-relaxed max-w-lg relative z-10">{s.secCard1.body}</p>
                            </motion.div>

                            <motion.div style={{ opacity: secCard23O, y: secCard23Y, scale: secCard23S }}
                                className="glass-card glass-hover h-[95px] rounded-2xl p-4 flex flex-col justify-center cursor-pointer will-change-transform"
                                whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3 className="text-base md:text-lg font-normal text-white mb-1 leading-snug">
                                    {s.secCard2.titleHead}<span className="text-[#10B981]">{s.secCard2.titleGreen}</span>
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed max-w-xl">{s.secCard2.body}</p>
                            </motion.div>

                            <motion.div style={{ opacity: secCard23O, y: secCard23Y, scale: secCard23S }}
                                className="glass-card glass-hover h-[95px] rounded-2xl p-4 flex flex-col justify-center cursor-pointer will-change-transform"
                                whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3 className="text-base md:text-lg font-normal text-white mb-1 leading-snug">
                                    {s.secCard3.titleHead}<span className="text-[#10B981]">{s.secCard3.titleGreen}</span>{s.secCard3.titleTail}
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed max-w-xl">{s.secCard3.body}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileSolution() {
    const { t } = useLang();
    const { open } = useDemoModal();
    const s = t.solution;

    const cardAnim = (i: number) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
    });

    return (
        <div className="w-full px-4 py-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-light tracking-tight text-white mb-2">
                    {s.headingStart}{s.headingGreen && ` ${s.headingGreen}`}{s.headingEnd && ` ${s.headingEnd}`}
                </h2>
                <p className="text-sm text-white/60 font-light leading-relaxed">{s.subheading}</p>
            </div>

            <div className="flex flex-col gap-3">
                {/* Main card */}
                <motion.div {...cardAnim(0)} className="glass-card glass-hover rounded-2xl p-5 relative overflow-hidden">
                    <h3 className="text-2xl font-medium tracking-tight leading-[1.1] mb-3">
                        <span className="text-[#10B981]">{s.mainCard.line1}</span>{' '}
                        <span className="text-white">{s.mainCard.line2} {s.mainCard.line3}</span>
                    </h3>
                    <p className="text-sm text-white/60 font-light leading-relaxed mb-4">{s.mainCard.body}</p>
                    <button onClick={open} className="glass-btn text-sm cursor-pointer">{s.mainCard.cta}</button>
                    <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] opacity-50 pointer-events-none">
                        <NodeTopology />
                    </div>
                </motion.div>

                {/* Secondary cards */}
                <motion.div {...cardAnim(1)} className="glass-card glass-hover rounded-2xl p-4">
                    <h3 className="text-base font-normal text-white mb-1">
                        <span className="text-[#10B981]">{s.secCard1.titleGreen}</span>{s.secCard1.titleLine1} {s.secCard1.titleLine2}
                    </h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">{s.secCard1.body}</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                    <motion.div {...cardAnim(2)} className="glass-card glass-hover rounded-2xl p-4">
                        <h3 className="text-sm font-normal text-white mb-1">
                            {s.secCard2.titleHead}<span className="text-[#10B981]">{s.secCard2.titleGreen}</span>
                        </h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">{s.secCard2.body}</p>
                    </motion.div>
                    <motion.div {...cardAnim(3)} className="glass-card glass-hover rounded-2xl p-4">
                        <h3 className="text-sm font-normal text-white mb-1">
                            {s.secCard3.titleHead}<span className="text-[#10B981]">{s.secCard3.titleGreen}</span>{s.secCard3.titleTail}
                        </h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">{s.secCard3.body}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default function Solution() {
    return (
        <>
            <div className="hidden md:block"><DesktopSolution /></div>
            <div className="md:hidden"><MobileSolution /></div>
        </>
    );
}
