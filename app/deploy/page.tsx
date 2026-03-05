"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/Logo_white.png';
import BrainImg from '../assets/Brain.png';

export default function DeployPage() {
    return (
        <div className="min-h-screen bg-transparent text-white flex flex-col font-sans selection:bg-[#42C971]/30">
            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 pb-20 pt-32">
                <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] group">
                            {/* Content */}
                            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                                <Link href="/" className="inline-block">
                                    <Image src={LogoWhite} alt="Logo" width={100} height={100} className="w-auto h-10" />
                                </Link>

                                <div className="max-w-[420px]">
                                    <h2 className="text-xl md:text-3xl font-light tracking-tight leading-[1.1] mb-0">
                                        Get Access for your <span className="text-[#42C971] relative">
                                            personal hub
                                            <span className="absolute bottom-1 left-0 w-full h-px bg-[#42C971]/30"></span>
                                        </span> clarity and productivity
                                    </h2>
                                </div>
                            </div>

                            {/* Background Image (Brain) */}
                            <div className="absolute -bottom-[50%] -right-[45%] w-[150%] h-[150%] z-10 opacity-20 mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                                <img
                                    src={BrainImg.src}
                                    alt="Background Graphic"
                                    className="w-full h-full object-contain"
                                    style={{ filter: 'hue-rotate(-20deg) saturate(1.5) brightness(0.8)' }}
                                />
                                <div className="absolute inset-0 bg-gradient-radial from-[#42C971]/20 to-transparent blur-3xl opacity-50"></div>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute top-0 left-0 w-full h-full border border-white/5 rounded-[3.5rem] z-30 pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Right: Signup Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col max-w-[480px] lg:max-w-none lg:pl-12"
                    >
                        <div className="mb-12">
                            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
                                Create an <span className="text-[#42C971]">account</span>
                            </h1>
                            <p className="text-white/40 text-lg font-light">Join the neural infrastructure for elite performance.</p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Your email</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-[#0D0D0D] border border-white/[0.08] rounded-2xl px-6 py-5 text-lg font-light placeholder:text-white/10 focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300 shadow-inner"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-normal text-white/50 ml-1">Create Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-[#0D0D0D] border border-white/[0.08] rounded-2xl px-6 py-5 text-lg font-light placeholder:text-white/10 focus:outline-none focus:border-[#42C971]/40 focus:ring-1 focus:ring-[#42C971]/20 transition-all duration-300 shadow-inner"
                                />
                            </div>

                            <div className="pt-4">
                                <button className="w-full bg-gradient-to-r from-[#28492C] to-[#1A2E1C] border border-[#42C971]/20 text-white font-medium py-5 rounded-2xl shadow-[0_20px_40px_rgba(66,201,113,0.1)] hover:shadow-[0_20px_50px_rgba(66,201,113,0.2)] hover:border-[#42C971]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 cursor-pointer text-lg">
                                    Create account
                                </button>
                            </div>
                        </form>

                        <div className="mt-12 text-center lg:text-left">
                            <p className="text-white/30 font-light">
                                Already have an account? <Link href="#" className="text-[#42C971] hover:text-[#42C971]/80 transition-colors duration-300 ml-1 underline underline-offset-4 decoration-[#42C971]/30 hover:decoration-[#42C971]">Log in</Link>
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#42C971]/[0.03] blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#42C971]/[0.02] blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
}
