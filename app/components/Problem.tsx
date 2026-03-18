"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
);
const BlockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);
const TrendingDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
    </svg>
);

const cardBase = "glass-card glass-hover flex rounded-2xl p-4 cursor-pointer will-change-transform";
const iconBox  = "w-10 h-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0 mr-4";

function DesktopProblem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLang();
    const { card1, card2, card3, card4 } = t.problem;

    const { theme } = useTheme();
    const hoverScale = theme === 'light' ? {} : { scale: 1.02 };
    const splineScene = theme === 'light'
        ? 'https://prod.spline.design/CwD47pXT1o1ooBwr/scene.splinecode'
        : 'https://prod.spline.design/z2ECl-oMJqwWazTM/scene.splinecode';


    const { scrollYProgress: rawProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const scrollYProgress = useSpring(rawProgress, { stiffness: 40, damping: 65, mass: 0.8, restDelta: 0.001 });

    const bgOpacity = useTransform(scrollYProgress, [0.05, 0.30], [1, 0.1]);
    const bgScale   = useTransform(scrollYProgress, [0.05, 0.30], [1, 1.04]);
    // All 4 cards share identical animation ranges — use a single set of MotionValues
    const cardY = useTransform(scrollYProgress, [0.25, 0.45], [65, 0]);
    const cardO = useTransform(scrollYProgress, [0.25, 0.43], [0, 1]);
    const cardS = useTransform(scrollYProgress, [0.25, 0.45], [0.96, 1]);

    return (
        <div ref={containerRef} className="has-sticky w-full h-[130vh] relative pt-6 rounded-3xl" style={{ isolation: 'isolate' }}>
            <div className="sticky top-8 h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start">
                <div className="text-center mb-4 px-4">
                    <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-white mb-3">
                        {t.problem.headingStart}{' '}<span className="text-[#10B981]">{t.problem.headingGreen}</span>{' '}{t.problem.headingEnd}
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">{t.problem.subheading}</p>
                </div>

                <div className="relative w-full max-w-[1020px] h-[420px] md:h-[560px] rounded-[2rem] overflow-hidden glass-card" style={{ background: 'transparent' }}>
                    <motion.div className="absolute will-change-transform" style={{ opacity: bgOpacity, scale: bgScale, inset: '-10%' }}>
                        <Spline scene={splineScene} className="w-full h-full" />
                    </motion.div>
                    <div className="absolute inset-0 z-20 grid grid-cols-2 gap-3 md:gap-5 p-3 md:p-8">
                        <motion.div style={{ opacity: cardO, y: cardY, scale: cardS }} className={cardBase} whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                            <div className={iconBox}><ClockIcon /></div>
                            <div className="flex flex-col justify-center min-w-0">
                                <h3 className="text-sm md:text-base font-normal text-white mb-1 leading-snug">
                                    <span className="text-white/60">{card1.titleDim}</span>{card1.titleConnector}<span className="text-white">{card1.titleBright}</span>{card1.titleTail}
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">{card1.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: cardO, y: cardY, scale: cardS }} className={cardBase} whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                            <div className={iconBox}><CalendarIcon /></div>
                            <div className="flex flex-col justify-center min-w-0">
                                <h3 className="text-sm md:text-base font-normal text-white mb-1 leading-snug">
                                    {card2.titleHead}{' '}<span className="text-white/60">{card2.titleDim}</span>
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">{card2.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: cardO, y: cardY, scale: cardS }} className={cardBase} whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                            <div className={iconBox}><BlockIcon /></div>
                            <div className="flex flex-col justify-center min-w-0">
                                <h3 className="text-sm md:text-base font-normal text-white mb-1 leading-snug">
                                    {card3.titleHead}{' '}<span className="text-white">{card3.titleBright}</span>{' '}<span className="text-white/60">{card3.titleDim}</span>
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">{card3.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: cardO, y: cardY, scale: cardS }} className={cardBase} whileHover={hoverScale} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                            <div className={iconBox}><TrendingDownIcon /></div>
                            <div className="flex flex-col justify-center min-w-0">
                                <h3 className="text-sm md:text-base font-normal text-white mb-1 leading-snug">
                                    {card4.titleHead}{' '}<span className="text-white/60">{card4.titleDim}</span>
                                </h3>
                                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">{card4.body}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileProblem() {
    const { t } = useLang();
    const { card1, card2, card3, card4 } = t.problem;

    const cards = [
        { icon: <ClockIcon />, title: <><span className="text-white/60">{card1.titleDim}</span>{card1.titleConnector}<span className="text-white">{card1.titleBright}</span>{card1.titleTail}</>, body: card1.body },
        { icon: <CalendarIcon />, title: <>{card2.titleHead}{' '}<span className="text-white/60">{card2.titleDim}</span></>, body: card2.body },
        { icon: <BlockIcon />, title: <>{card3.titleHead}{' '}<span className="text-white">{card3.titleBright}</span>{' '}<span className="text-white/60">{card3.titleDim}</span></>, body: card3.body },
        { icon: <TrendingDownIcon />, title: <>{card4.titleHead}{' '}<span className="text-white/60">{card4.titleDim}</span></>, body: card4.body },
    ];

    return (
        <div className="w-full px-4 py-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-light tracking-tight text-white mb-2">
                    {t.problem.headingStart}{' '}<span className="text-[#10B981]">{t.problem.headingGreen}</span>{' '}{t.problem.headingEnd}
                </h2>
                <p className="text-sm text-white/60 font-light leading-relaxed">{t.problem.subheading}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-card glass-hover flex rounded-2xl p-4"
                    >
                        <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0 mr-4">
                            {card.icon}
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                            <h3 className="text-sm font-normal text-white mb-1 leading-snug">{card.title}</h3>
                            <p className="text-xs text-white/60 font-light leading-relaxed">{card.body}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function Problem() {
    return (
        <>
            <div className="hidden md:block"><DesktopProblem /></div>
            <div className="md:hidden"><MobileProblem /></div>
        </>
    );
}
