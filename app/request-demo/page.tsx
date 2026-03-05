"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function RequestDemoPage() {
    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        Experience the <span className="text-[#42C971]">Future</span>.
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Request a personalized walkthrough of the Cataly AI neural infrastructure.
                        See how algorithmic growth can transform your operation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-8 md:p-12 rounded-[3.5rem] border border-white/[0.08] bg-[#0A0A0A] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-[#42C971]/5 to-transparent pointer-events-none"></div>

                    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Company Size</label>
                                <select className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white/70 font-light focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300 appearance-none">
                                    <option className="bg-[#0A0A0A]">1-50 employees</option>
                                    <option className="bg-[#0A0A0A]">51-200 employees</option>
                                    <option className="bg-[#0A0A0A]">201-1000 employees</option>
                                    <option className="bg-[#0A0A0A]">1000+ employees</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-normal text-white/50 ml-1">How can we help?</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your operational challenges..."
                                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-[#28492C] to-[#1A2E1C] border border-[#42C971]/20 text-white font-medium py-5 rounded-2xl shadow-[0_20px_40px_rgba(66,201,113,0.1)] hover:shadow-[0_20px_50px_rgba(66,201,113,0.2)] hover:border-[#42C971]/40 hover:scale-[1.005] active:scale-[0.99] transition-all duration-500 cursor-pointer text-lg">
                                Complete Request
                            </button>
                        </div>
                        <p className="text-center text-white/30 text-xs font-light">
                            By clicking, you agree to our processing of your data as per the Privacy Policy.
                        </p>
                    </form>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#42C971]/[0.03] blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}
