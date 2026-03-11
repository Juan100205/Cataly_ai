"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoModal } from '../i18n/DemoModalContext';
import { useLang } from '../i18n/LangContext';

const CALENDLY_URL =
    'https://calendly.com/management-catalylabs?background_color=0a0a0c&text_color=e2e2e2&primary_color=10b981&hide_gdpr_banner=1';

export default function DemoModal() {
    const { isOpen, close } = useDemoModal();
    const { lang } = useLang();
    const calendlyUrl = CALENDLY_URL;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={close}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.94, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 24 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div
                            className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden glass-card pointer-events-auto"
                            style={{
                                background: 'linear-gradient(135deg, rgba(10,10,12,0.99) 0%, rgba(10,22,18,0.97) 100%)',
                                boxShadow: '0 0 0 1px rgba(16,185,129,0.18), 0 40px 80px rgba(0,0,0,0.7)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-8 pt-7 pb-5">
                                <div>
                                    <p className="text-[10px] text-[#10B981] tracking-[0.25em] uppercase font-medium mb-1.5">
                                        Cataly AI — Private Access
                                    </p>
                                    <h2 className="text-xl font-light text-white tracking-tight">
                                        {lang === 'es' ? 'Agenda tu Demo Privada' : 'Schedule Your Private Demo'}
                                    </h2>
                                </div>
                                <button
                                    onClick={close}
                                    className="flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                                    aria-label="Close"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/25 to-transparent" />

                            {/* Calendly embed */}
                            <div className="h-[540px] w-full">
                                <iframe
                                    src={calendlyUrl}
                                    className="w-full h-full"
                                    frameBorder={0}
                                    title={lang === 'es' ? 'Agendar Demo Privada' : 'Book Private Demo'}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
