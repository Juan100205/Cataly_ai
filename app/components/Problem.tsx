"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProblemImg from '../assets/Problem.png';
import { useLang } from '../i18n/LangContext';

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

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLang();
    const { card1, card2, card3, card4 } = t.problem;

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

    const bgOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0.1]);
    const bgScale  = useTransform(scrollYProgress, [0.05, 0.25], [1, 1.04]);

    const c1y = useTransform(scrollYProgress, [0.12, 0.27], [65, 0]);
    const c1o = useTransform(scrollYProgress, [0.12, 0.25], [0, 1]);
    const c1s = useTransform(scrollYProgress, [0.12, 0.27], [0.96, 1]);

    const c2y = useTransform(scrollYProgress, [0.24, 0.39], [65, 0]);
    const c2o = useTransform(scrollYProgress, [0.24, 0.37], [0, 1]);
    const c2s = useTransform(scrollYProgress, [0.24, 0.39], [0.96, 1]);

    const c3y = useTransform(scrollYProgress, [0.36, 0.51], [65, 0]);
    const c3o = useTransform(scrollYProgress, [0.36, 0.49], [0, 1]);
    const c3s = useTransform(scrollYProgress, [0.36, 0.51], [0.96, 1]);

    const c4y = useTransform(scrollYProgress, [0.48, 0.63], [65, 0]);
    const c4o = useTransform(scrollYProgress, [0.48, 0.61], [0, 1]);
    const c4s = useTransform(scrollYProgress, [0.48, 0.63], [0.96, 1]);

    const cardClass = "glass-card glass-hover flex rounded-2xl p-4 md:p-6 cursor-pointer will-change-transform";
    const iconBoxClass = "w-10 h-10 md:w-14 md:h-14 rounded-xl glass-card flex items-center justify-center flex-shrink-0";

    return (
        <div ref={containerRef} className="w-full h-[140vh] relative pt-8 rounded-3xl" style={{ isolation: 'isolate' }}>
            <div className="sticky top-8 h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start">

                {/* Header */}
                <div className="text-center mb-6 md:mb-3 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-tight text-white mb-4">
                        {t.problem.headingStart}{' '}
                        <span className="text-[#42C971]">{t.problem.headingGreen}</span>{' '}
                        {t.problem.headingEnd}
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed">
                        {t.problem.subheading}
                    </p>
                </div>

                {/* Diagram Area */}
                <div className="relative w-full max-w-[1020px] h-[420px] md:h-[580px] rounded-[2rem] overflow-hidden glass-card" style={{ background: 'transparent' }}>

                    {/* Background Graphic */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
                        style={{ opacity: bgOpacity, scale: bgScale }}
                    >
                        <img src={ProblemImg.src} alt="Diagram" />
                    </motion.div>

                    {/* Cards */}
                    <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 p-4 md:p-12">

                        <motion.div style={{ opacity: c1o, y: c1y, scale: c1s }}
                            className={cardClass}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={`${iconBoxClass} mr-3 md:mr-5`}><ClockIcon /></div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg md:text-xl font-normal text-white mb-1.5 leading-snug">
                                    <span className="text-white/60">{card1.titleDim}</span>
                                    {card1.titleConnector}
                                    <span className="text-white">{card1.titleBright}</span>
                                    {card1.titleTail}
                                </h3>
                                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{card1.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: c2o, y: c2y, scale: c2s }}
                            className={cardClass}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={`${iconBoxClass} mr-3 md:mr-5`}><CalendarIcon /></div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg md:text-xl font-normal text-white mb-1.5 leading-snug">
                                    {card2.titleHead}{' '}
                                    <span className="text-white/60">{card2.titleDim}</span>
                                </h3>
                                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{card2.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: c3o, y: c3y, scale: c3s }}
                            className={cardClass}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={`${iconBoxClass} mr-3 md:mr-5`}><BlockIcon /></div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg md:text-xl font-normal text-white mb-1.5 leading-snug">
                                    {card3.titleHead}{' '}
                                    <span className="text-white">{card3.titleBright}</span>{' '}
                                    <span className="text-white/60">{card3.titleDim}</span>
                                </h3>
                                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{card3.body}</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: c4o, y: c4y, scale: c4s }}
                            className={cardClass}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={`${iconBoxClass} mr-3 md:mr-5`}><TrendingDownIcon /></div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg md:text-xl font-normal text-white mb-1.5 leading-snug">
                                    {card4.titleHead}{' '}
                                    <span className="text-white/60">{card4.titleDim}</span>
                                </h3>
                                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{card4.body}</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
