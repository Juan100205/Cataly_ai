"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoading } from '../i18n/LoadingContext';

const EXPO    = [0.16, 1, 0.3, 1] as const;
const MIN_MS  = 1600;
const MAX_MS  = 9000;
const LG_PX   = 1024; // breakpoint donde aparece Spline (lg:block)

export default function PageLoader() {
    const [visible, setVisible] = useState(true);
    const [minDone, setMinDone] = useState(false);
    const { splineReady }       = useLoading();

    useEffect(() => {
        let dismissed = false;
        const dismiss = () => { if (!dismissed) { dismissed = true; setVisible(false); } };

        const min = setTimeout(() => {
            setMinDone(true);
            // Móvil: Spline está hidden → no esperamos onLoad
            if (window.innerWidth < LG_PX) dismiss();
        }, MIN_MS);

        const fallback = setTimeout(dismiss, MAX_MS);
        return () => { clearTimeout(min); clearTimeout(fallback); };
    }, []);

    // Desktop: dismiss cuando Spline termina de cargar (y ya pasó MIN_MS)
    useEffect(() => {
        if (minDone && splineReady) setVisible(false);
    }, [minDone, splineReady]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.9, ease: EXPO }}
                    className="fixed inset-0 z-[9999] bg-[#0A0A0C] flex flex-col items-center justify-center pointer-events-none select-none"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EXPO }}
                        className="flex flex-col items-center gap-8"
                    >
                        {/* Ring */}
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                    border: '1px solid transparent',
                                    borderTopColor: '#10B981',
                                    borderRightColor: 'rgba(16,185,129,0.2)',
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-2 h-2 rounded-full bg-[#10B981]"
                                />
                            </div>
                        </div>

                        {/* Wordmark */}
                        <div className="flex items-baseline gap-[0.15em]">
                            <span className="text-white text-2xl font-light tracking-[0.22em] uppercase">Cataly</span>
                            <span className="text-[#10B981] text-2xl font-light tracking-[0.22em] uppercase">AI</span>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-[#10B981]"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
