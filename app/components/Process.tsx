"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
    }),
};

export default function Process() {
    const { t } = useLang();
    const p = t.process;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">

            {/* Header */}
            <div className="text-center mb-14 px-4">
                <p className="text-[10px] md:text-xs text-[#10B981] tracking-[0.25em] uppercase font-medium mb-3">
                    {p.label}
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-4">
                    {p.heading}{' '}
                    <span className="text-[#10B981]">{p.headingGreen}</span>
                </h2>
                <p className="text-sm md:text-base text-white/40 max-w-xl mx-auto font-light leading-relaxed">
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
                    {p.steps.map((step, i) => (
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

                            {/* Number circle */}
                            <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border border-[#10B981]/30 bg-[#10B981]/[0.06] flex items-center justify-center mb-0 md:mb-5 mx-0 md:mx-auto">
                                    <span className="text-[#10B981] text-sm font-medium tracking-widest tabular-nums">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Mobile text block */}
                                <div className="flex-1 md:hidden pb-6">
                                    <h3 className="text-sm font-medium text-white mb-1">{step.title}</h3>
                                    <p className="text-xs text-white/45 font-light leading-relaxed">{step.body}</p>
                                </div>
                            </div>

                            {/* Desktop text block */}
                            <div className="hidden md:block text-center px-1">
                                <h3 className="text-sm font-medium text-white mb-2">{step.title}</h3>
                                <p className="text-[11px] text-white/45 font-light leading-relaxed">{step.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
