"use client";

import React, { useState, useCallback, useDeferredValue } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { useDemoModal } from '../i18n/DemoModalContext';

function formatCurrency(value: number): string {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    return `$${value.toLocaleString('en-US')}`;
}

export default function Calculator() {
    const { t } = useLang();
    const { open } = useDemoModal();
    const c = t.calculator;

    const [leads, setLeads] = useState(1000);
    const [ticket, setTicket] = useState(5000);

    // useDeferredValue: el output animado actualiza con baja prioridad —
    // el slider responde instantáneo, la animación del número no bloquea
    const deferredLeads  = useDeferredValue(leads);
    const deferredTicket = useDeferredValue(ticket);
    const capitalLatente = deferredLeads * 0.01 * deferredTicket;

    const handleLeads  = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setLeads(Number(e.target.value)), []);
    const handleTicket = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setTicket(Number(e.target.value)), []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
            <div className="glass-card rounded-[2rem] p-6 md:p-10">

                {/* Heading */}
                <div className="text-center mb-8">
                    <p className="text-[10px] md:text-xs text-[#10B981] tracking-[0.25em] uppercase font-medium mb-4">
                        Revenue Intelligence
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-3">
                        {c.heading}
                    </h2>
                    <p className="text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
                        {c.subheading}
                    </p>
                </div>

                {/* Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                    <div>
                        <div className="flex justify-between items-baseline mb-3">
                            <label className="text-sm text-white/60 font-light">{c.slider1Label}</label>
                            <span className="text-xl font-medium text-white tabular-nums">{leads.toLocaleString('en-US')}</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={10000}
                            step={100}
                            value={leads}
                            onChange={handleLeads}
                            className="calc-slider w-full"
                        />
                        <div className="flex justify-between mt-2">
                            <span className="text-xs text-white/25">0</span>
                            <span className="text-xs text-white/25">10,000</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline mb-3">
                            <label className="text-sm text-white/60 font-light">{c.slider2Label}</label>
                            <span className="text-xl font-medium text-white tabular-nums">${ticket.toLocaleString('en-US')}</span>
                        </div>
                        <input
                            type="range"
                            min={500}
                            max={50000}
                            step={500}
                            value={ticket}
                            onChange={handleTicket}
                            className="calc-slider w-full"
                        />
                        <div className="flex justify-between mt-2">
                            <span className="text-xs text-white/25">$500</span>
                            <span className="text-xs text-white/25">$50,000+</span>
                        </div>
                    </div>

                </div>

                {/* Output */}
                <div className="text-center py-6 border-t border-b border-white/[0.05]">
                    <p className="text-xs text-white/40 tracking-[0.2em] uppercase mb-4">{c.outputLabel}</p>
                    <motion.div
                        key={capitalLatente}
                        initial={{ scale: 0.96, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-baseline justify-center gap-2"
                    >
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#10B981]">
                            {formatCurrency(capitalLatente)}
                        </span>
                        <span className="text-lg md:text-2xl text-white/30">USD</span>
                    </motion.div>
                    <p className="text-sm text-white/30 mt-4 font-light">{c.footnote}</p>
                </div>

                {/* CTA */}
                <div className="text-center mt-6">
                    <motion.button
                        onClick={open}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#10B981] text-[#0A0A0C] font-medium text-sm md:text-base cursor-pointer hover:bg-[#0ea572] transition-colors w-full sm:w-auto justify-center"
                    >
                        {c.cta}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </motion.button>
                </div>

            </div>
        </div>
    );
}
