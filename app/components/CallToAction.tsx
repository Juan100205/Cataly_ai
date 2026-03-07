"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '../i18n/LangContext';

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

export default function CallToAction() {
    const { t } = useLang();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">

                <Link href="/request-demo" className="block group">
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-card glass-hover rounded-[2rem] p-8 md:p-12 flex items-center justify-between cursor-pointer"
                    >
                        <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight">
                            <span className="text-[#42C971]">{t.cta.demo.green}</span>{t.cta.demo.tail}
                        </h3>
                        <div className="text-white/40 group-hover:text-[#42C971] group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 ml-4">
                            <ArrowIcon />
                        </div>
                    </motion.div>
                </Link>

                <Link href="/deploy" className="block group">
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-card glass-hover rounded-[2rem] p-8 md:p-12 flex items-center justify-between cursor-pointer"
                    >
                        <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight">
                            <span className="text-[#42C971]">{t.cta.build.green}</span>{t.cta.build.tail}
                        </h3>
                        <div className="text-white/40 group-hover:text-[#42C971] group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 ml-4">
                            <ArrowIcon />
                        </div>
                    </motion.div>
                </Link>

            </div>
        </div>
    );
}
