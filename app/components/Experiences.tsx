"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ChartDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.511-5.511-3.182" />
    </svg>
);

const NetworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

const icons = [ClockIcon, ChartDownIcon, NetworkIcon];
const factKeys = ['fact1', 'fact2', 'fact3'] as const;

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' as const, delay: i * 0.1 },
    }),
};

export default function Experiences() {
    const { t } = useLang();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-5">

            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <p className="text-[10px] md:text-xs text-[#10B981] tracking-[0.25em] uppercase font-medium mb-4">
                    Industry Data
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
                    {t.experiences.heading}
                </h2>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {factKeys.map((key, i) => {
                    const fact = t.experiences[key];
                    const Icon = icons[i];
                    return (
                        <motion.div
                            key={key}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                            variants={cardVariants}
                            whileHover={{
                                boxShadow: '0 0 28px rgba(16,185,129,0.18)',
                            }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card glass-hover rounded-[2rem] p-8 md:p-10 flex flex-col"
                        >
                            {/* Icon */}
                            <div className="text-[#10B981] mb-6">
                                <Icon />
                            </div>

                            {/* Metric */}
                            <div className="text-5xl md:text-6xl font-medium tracking-tight text-[#10B981] mb-4 tabular-nums">
                                {fact.metric}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-normal text-white mb-3">
                                {fact.title}
                            </h3>

                            {/* Body */}
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                {fact.body}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
}
