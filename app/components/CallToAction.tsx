"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { useDemoModal } from '../i18n/DemoModalContext';

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

export default function CallToAction() {
    const { t } = useLang();
    const { open } = useDemoModal();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
            <div className="pb-10">
                <motion.div
                    onClick={open}
                    whileHover={{
                        scale: 1.015,
                        boxShadow: '0 0 40px rgba(16,185,129,0.12)',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card glass-hover rounded-[2rem] p-8 md:p-16 flex items-center justify-between cursor-pointer group"
                >
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                        {t.cta.primary}
                    </h3>
                    <div className="text-white/30 group-hover:text-[#10B981] transition-all duration-300 ml-8">
                        <ArrowIcon />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
