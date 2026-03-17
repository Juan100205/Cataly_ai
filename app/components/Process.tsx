"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../i18n/ThemeContext';
import { useDemoModal } from '../i18n/DemoModalContext';

const stepIcons = [
    // 01 Generate leads — target
    <svg key="01" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
        <circle cx="12" cy="12" r="10" strokeWidth={1} />
        <circle cx="12" cy="12" r="6" strokeWidth={1} />
        <circle cx="12" cy="12" r="2" strokeWidth={1} fill="currentColor" fillOpacity={0.4} />
        <line x1="12" y1="2" x2="12" y2="5" strokeWidth={1} />
        <line x1="12" y1="19" x2="12" y2="22" strokeWidth={1} />
        <line x1="2" y1="12" x2="5" y2="12" strokeWidth={1} />
        <line x1="19" y1="12" x2="22" y2="12" strokeWidth={1} />
    </svg>,
    // 02 Automated follow-up — bolt + message
    <svg key="02" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>,
    // 03 Qualify — funnel/filter
    <svg key="03" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>,
    // 04 Book the meeting — calendar
    <svg key="04" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>,
    // 05 Close the deal — trophy
    <svg key="05" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
    </svg>,
];

const EXPO = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EXPO, delay: i * 0.08 },
    }),
};

export default function Process() {
    const { t } = useLang();
    const { theme } = useTheme();
    const { open } = useDemoModal();
    const isLight = theme === 'light';
    const p = t.process;
    const [active, setActive] = useState<number>(0);
    const activeStep = p.steps[active];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">

            {/* Header */}
            <div className="text-center mb-14 px-4">
                <p className="text-[10px] md:text-xs text-[#10B981] tracking-[0.25em] uppercase font-medium mb-3">
                    {p.label}
                </p>
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4 ${isLight ? 'text-black' : 'text-white'}`}>
                    {p.heading}{' '}
                    <span className="text-[#10B981]">{p.headingGreen}</span>
                </h2>
                <p className={`text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed ${isLight ? 'text-black/50' : 'text-white/40'}`}>
                    {p.subheading}
                </p>
            </div>

            {/* Steps */}
            <div className="relative">
                {/* Connector line (desktop) */}
                <div
                    className="hidden md:block absolute top-[3.25rem] left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-[1px] pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.25) 15%, rgba(16,185,129,0.25) 85%, transparent)',
                    }}
                />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
                    {p.steps.map((step, i) => {
                        const isActive = active === i;
                        return (
                            <motion.div
                                key={step.number}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={cardVariants}
                                className="relative flex flex-col"
                            >
                                {/* Mobile connector */}
                                {i < p.steps.length - 1 && (
                                    <div className="md:hidden absolute left-[1.75rem] top-[4rem] w-[1px] h-[calc(100%+1rem)] bg-gradient-to-b from-[#10B981]/30 to-transparent pointer-events-none" />
                                )}

                                {/* Number circle + title */}
                                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                                    <button
                                        onClick={() => setActive(i)}
                                        className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center mb-0 md:mb-3 mx-0 md:mx-auto cursor-pointer transition-all duration-300 focus:outline-none"
                                        style={{
                                            border: isActive
                                                ? '1px solid rgba(16,185,129,0.7)'
                                                : isLight
                                                    ? '1px solid rgba(16,185,129,0.4)'
                                                    : '1px solid rgba(16,185,129,0.3)',
                                            background: isActive
                                                ? 'rgba(16,185,129,0.15)'
                                                : isLight
                                                    ? 'rgba(16,185,129,0.08)'
                                                    : 'rgba(16,185,129,0.06)',
                                            boxShadow: isActive
                                                ? '0 0 20px rgba(16,185,129,0.25), 0 0 40px rgba(16,185,129,0.1)'
                                                : 'none',
                                        }}
                                    >
                                        <span className="text-[#10B981] text-sm font-medium tracking-widest tabular-nums">
                                            {step.number}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="step-ring"
                                                className="absolute inset-0 rounded-full"
                                                style={{ border: '1px solid rgba(16,185,129,0.5)' }}
                                                transition={{ duration: 0.35, ease: EXPO }}
                                            />
                                        )}
                                    </button>

                                    {/* Title */}
                                    <p className={`hidden md:block text-center text-xs font-medium mt-2 transition-colors duration-200 ${
                                        isActive
                                            ? isLight ? 'text-black' : 'text-white'
                                            : isLight ? 'text-black/40' : 'text-white/45'
                                    }`}>
                                        {step.title}
                                    </p>
                                    <p className={`md:hidden text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? isLight ? 'text-black' : 'text-white'
                                            : isLight ? 'text-black/40' : 'text-white/45'
                                    }`}>
                                        {step.title}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Step detail card */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: EXPO }}
                className="mt-16 w-full p-px rounded-[2.5rem]"
                style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(255,255,255,0.04) 50%, rgba(16,185,129,0.25) 100%)',
                }}
            >
                <div
                    className="relative w-full rounded-[2.45rem] px-8 md:px-14 py-12 md:py-16 overflow-hidden"
                    style={{ background: isLight ? '#F9FAFB' : '#0A0A0C' }}
                >
                    {/* Background icon */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`icon-${active}`}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 0.20, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: EXPO }}
                            className="absolute -bottom-12 -right-12 pointer-events-none"
                            style={{ color: '#10B981' }}
                        >
                            <div className="w-96 h-96 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[0.35]">
                                {stepIcons[active]}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.45, ease: EXPO }}
                            className="relative z-10 flex flex-col gap-6"
                        >
                            {/* Number badge */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{
                                        border: '1px solid rgba(16,185,129,0.6)',
                                        background: 'rgba(16,185,129,0.12)',
                                        boxShadow: '0 0 18px rgba(16,185,129,0.18)',
                                    }}
                                >
                                    <span className="text-[#10B981] text-xs font-medium tracking-widest tabular-nums">
                                        {activeStep.number}
                                    </span>
                                </div>
                                <span className={`text-xs tracking-[0.2em] uppercase font-medium ${isLight ? 'text-black/30' : 'text-white/25'}`}>
                                    {p.label}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className={`text-2xl md:text-3xl font-light tracking-tight leading-snug max-w-lg ${isLight ? 'text-black' : 'text-white'}`}>
                                {activeStep.title}
                            </h3>

                            {/* Description */}
                            <p className={`text-sm md:text-base font-light leading-relaxed max-w-xl ${isLight ? 'text-black/55' : 'text-white/50'}`}>
                                {activeStep.body}
                            </p>

                            {/* CTA */}
                            <button
                                onClick={open}
                                className="mt-2 w-fit px-7 py-3 rounded-2xl bg-[#10B981] text-[#0A0A0C] font-medium text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_28px_rgba(16,185,129,0.5),0_12px_32px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {t.cta.primary}
                            </button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Step indicators */}
                    <div className="relative z-10 flex gap-2 mt-10">
                        {p.steps.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className="h-px cursor-pointer transition-all duration-300 rounded-full focus:outline-none"
                                style={{
                                    width: active === i ? '2rem' : '0.75rem',
                                    background: active === i
                                        ? '#10B981'
                                        : isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
