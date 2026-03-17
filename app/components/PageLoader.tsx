"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const dismiss = () => setVisible(false);

        // Tiempo mínimo de display: 1.4s — luego esperamos window.onload
        const minTimer = setTimeout(() => {
            if (document.readyState === 'complete') {
                dismiss();
            } else {
                window.addEventListener('load', dismiss, { once: true });
            }
        }, 1400);

        // Fallback: ocultar siempre antes de 6s
        const fallback = setTimeout(dismiss, 6000);

        return () => {
            clearTimeout(minTimer);
            clearTimeout(fallback);
            window.removeEventListener('load', dismiss);
        };
    }, []);

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
                        {/* Ring animado */}
                        <div className="relative w-16 h-16">
                            {/* Outer static ring */}
                            <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                            {/* Spinning arc */}
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
                            {/* Inner dot */}
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
                            <span className="text-white text-2xl font-light tracking-[0.22em] uppercase">
                                Cataly
                            </span>
                            <span className="text-[#10B981] text-2xl font-light tracking-[0.22em] uppercase">
                                AI
                            </span>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-[#10B981]"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                        delay: i * 0.22,
                                        ease: 'easeInOut',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Glow de fondo */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
