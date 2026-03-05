"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function DataProtectionPage() {
    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                        Data <span className="text-[#42C971]">Protection</span>.
                    </h1>
                    <p className="text-white/40 text-lg font-light">Infrastructure Security & Compliance Documentation</p>
                </motion.div>

                <div className="space-y-16">
                    <section>
                        <h2 className="text-2xl font-medium mb-6 text-white/90">Infrastructure Hardening</h2>
                        <p className="text-white/50 leading-relaxed font-light mb-4">
                            Cataly AI operates on a multi-layered security architecture. Each neural node is isolated within a private
                            virtual cloud, protected by enterprise firewalls and deep packet inspection (DPI).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {[
                                "Isolated Model Execution",
                                "Continuous Vulnerability Scanning",
                                "Zero-Trust Access Control",
                                "Audit-Logged Operations"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#42C971]" />
                                    <span className="text-white/60 text-sm font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-6 text-white/90">Lead Data Safeguards</h2>
                        <p className="text-white/50 leading-relaxed font-light">
                            All conversational data is processed through our "Signal Filter," which redacts credit card numbers,
                            social security identifiers, and health information before reaching the primary AI logic.
                            Your reactivation flows are safe by design.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-6 text-white/90">Incident Response</h2>
                        <p className="text-white/50 leading-relaxed font-light">
                            Our SOC (Security Operations Center) monitors infrastructure 24/7/365. In the event of a potential
                            threat, our automated defense systems trigger instant node isolation and notify the affected data controllers.
                        </p>
                    </section>
                </div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[150px] rounded-full"></div>
            </div>
        </div>
    );
}
