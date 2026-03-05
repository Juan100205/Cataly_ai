"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProblemImg from '../assets/Problem.png';

// Icons ...
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
);

const BlockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);

const TrendingDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-white/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-white/50">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const DollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-white/50">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default function Problem() {
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
    // Phase 0: 0.0  -> 0.08  → Clean background view
    // Phase 1: 0.08 -> 0.22  → Background fades out fast
    const bgOpacity = useTransform(scrollYProgress, [0.08, 0.22], [1, 0.15]);

    // Card 1
    const c1y = useTransform(scrollYProgress, [0.14, 0.32], [120, 0]);
    const c1o = useTransform(scrollYProgress, [0.14, 0.30], [0, 1]);

    // Card 2
    const c2y = useTransform(scrollYProgress, [0.30, 0.48], [120, 0]);
    const c2o = useTransform(scrollYProgress, [0.30, 0.46], [0, 1]);

    // Card 3
    const c3y = useTransform(scrollYProgress, [0.46, 0.64], [120, 0]);
    const c3o = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);

    // Card 4
    const c4y = useTransform(scrollYProgress, [0.62, 0.80], [120, 0]);
    const c4o = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);

    return (
        // Ampliamos la altura "real" del componente para obligar al usuario a hacer bastante scroll. 
        // Usamos 'h-[400vh]' para que el usuario tenga que bajar 4 alturas de ventana para terminar de ver las cartas.
        // Importante: No aplicamos 'snap-align' a los hijos directos internos de la animacion.
        <div ref={containerRef} className="w-full h-[400vh] relative pt-8 rounded-3xl" style={{ isolation: 'isolate' }}>

            {/* 
        Hacemos que el contenido visual se quede 'Sticky' pegado en la pantalla
        mientras el usuario va bajando a lo largo del h-[400vh].
      */}
            <div className="sticky top-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start">

                {/* Header Section */}
                <div className="text-center mb-8 md:mb-4 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white mb-6">
                        Your <span className="text-[#42C971]">Revenue</span> is Leaking.
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Your sales infrastructure has holes through which your daily profitability escapes.
                    </p>
                </div>

                {/* Diagram Area */}
                <div className="relative w-full max-w-[1000px] h-[600px] rounded-[2rem] border border-white/[0.05] bg-white/[0.01] overflow-hidden">

                    {/* BACKGROUND GRAPHIC (The connections) - Opacidad animada por el scrollProgress */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-opacity"
                        style={{ opacity: bgOpacity }}
                    >
                        <img src={ProblemImg.src} alt="Diagram" />
                    </motion.div>

                    {/* OVERLAY CARDS */}
                    <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-12">

                        {/* Card 1 */}
                        <motion.div
                            style={{ opacity: c1o, y: c1y }}
                            className="flex rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/80 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer"
                            whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="mr-4 md:mr-6 flex-shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                    <ClockIcon />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-2 leading-snug">
                                    <span className="text-white/60">The cost</span> of one <span className="text-white">minute</span> of silence.
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                    If an interested client doesn't receive a response within the first 5 minutes, the probability of closing drops by 400%. It's not lack of interest — your competitor just replied first.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            style={{ opacity: c2o, y: c2y }}
                            className="flex rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/80 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer"
                            whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="mr-4 md:mr-6 flex-shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                    <CalendarIcon />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-2 leading-snug">
                                    Sleeping <span className="text-white/60">money in your database.</span>
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                    Most of your contacts are forgotten because no one followed up. You don't need more new clients — you need a system that doesn't ignore the ones you already have.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            style={{ opacity: c3o, y: c3y }}
                            className="flex rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/80 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer"
                            whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="mr-4 md:mr-6 flex-shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                    <BlockIcon />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-2 leading-snug">
                                    Your team <span className="text-white">is not</span> <span className="text-white/60">infinite.</span>
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                    A human can only handle a limited number of messages before making mistakes or burning out. Your growth should not depend on how many people you hire, but on how intelligent your infrastructure is.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            style={{ opacity: c4o, y: c4y }}
                            className="flex rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/80 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer"
                            whileHover={{ boxShadow: '0 0 28px rgba(66,201,113,0.22)', borderColor: 'rgba(66,201,113,0.22)', scale: 1.015 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="mr-4 md:mr-6 flex-shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                    <TrendingDownIcon />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-normal text-white mb-2 leading-snug">
                                    Inaction <span className="text-white/60">is your biggest expense.</span>
                                </h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                    Every unattended contact is a sale that goes directly to your competition. By the end of the month, this isn't just a management issue — it's measurable financial loss.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </div>
    );
}
