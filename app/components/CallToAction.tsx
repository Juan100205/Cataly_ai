"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

export default function CallToAction() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">

                {/* Request a Demo Button */}
                <Link href="/request-demo" className="block group">
                    <motion.div
                        whileHover={{
                            scale: 1.015,
                            boxShadow: '0 0 40px rgba(66,201,113,0.2)',
                            borderColor: 'rgba(66,201,113,0.3)'
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="bg-[#0D0D0D] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-14 flex items-center justify-between transition-all duration-300 shadow-2xl group-hover:bg-[#111111]"
                    >
                        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                            <span className="text-[#42C971]">Request</span> a Demo
                        </h3>
                        <div className="text-white/40 group-hover:text-[#42C971] group-hover:translate-x-2 transition-all duration-300">
                            <ArrowIcon />
                        </div>
                    </motion.div>
                </Link>

                {/* Start Building Button */}
                <Link href="/deploy" className="block group">
                    <motion.div
                        whileHover={{
                            scale: 1.015,
                            boxShadow: '0 0 40px rgba(66,201,113,0.2)',
                            borderColor: 'rgba(66,201,113,0.3)'
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="bg-[#0D0D0D] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-14 flex items-center justify-between transition-all duration-300 shadow-2xl group-hover:bg-[#111111]"
                    >
                        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                            <span className="text-[#42C971]">Start</span> Building
                        </h3>
                        <div className="text-white/40 group-hover:text-[#42C971] group-hover:translate-x-2 transition-all duration-300">
                            <ArrowIcon />
                        </div>
                    </motion.div>
                </Link>

            </div>
        </div>
    );
}
