"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SecurityFeature = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-[2rem] border border-white/[0.08] bg-[#0A0A0A] hover:bg-white/[0.03] transition-all duration-300"
    >
        <div className="w-12 h-12 rounded-2xl bg-[#42C971]/10 flex items-center justify-center text-[#42C971] mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
        <p className="text-white/40 font-light leading-relaxed">{desc}</p>
    </motion.div>
);

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        Fortified <span className="text-[#42C971]">Trust</span>.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Security is the foundation of every neural deployment. We implement enterprise-grade
                        protections to ensure your infrastructure remains a fortress.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    <SecurityFeature
                        title="End-to-End Encryption"
                        desc="Military-grade AES-256 encryption for all data at rest and in transit. Your intelligence remains yours alone."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        }
                    />
                    <SecurityFeature
                        title="Global Compliance"
                        desc="Fully compliant with GDPR, SOC2 Type II, and ISO 27001 standards. We speak the language of enterprise trust."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        }
                    />
                    <SecurityFeature
                        title="Neural Anonymization"
                        desc="Proprietary layer that strips PII before data reaches the model, ensuring zero privacy risk during processing."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        }
                    />
                </div>

                {/* Privacy Badge Card */}
                <div className="w-full p-1 border border-white/[0.05] rounded-[4rem] bg-gradient-to-r from-[#42C971]/20 via-transparent to-[#42C971]/20">
                    <div className="w-full bg-[#0D0D0D] rounded-[3.9rem] p-16 md:p-24 flex flex-col items-center text-center">
                        <div className="text-[#42C971] mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light mb-6">Zero Trust Intelligence</h2>
                        <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
                            We don't just secure data; we build systems that don't need to see it.
                            Our Zero Trust architecture ensures that every request is verified, encrypted, and isolated.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[150px] rounded-full"></div>
            </div>
        </div>
    );
}
