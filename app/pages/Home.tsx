"use client";

import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import Experiences from '../components/Experiences';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

// Variantes de animación reutilizables para cada sección
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: "easeOut" }
    }
};

// Separador sutil de gradiente entre secciones
function SectionDivider() {
    return (
        <div className="w-full flex justify-center py-2 pointer-events-none select-none" aria-hidden>
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col p-4 md:p-6 font-sans selection:bg-[#42C971]/30">
            {/* Standard flow container allowing native scroll for Framer Motion to read window.scrollY */}
            <div className="w-full flex flex-col pt-24">

                {/* Hero Section Container */}
                <motion.section
                    className="w-full min-h-[calc(100vh-120px)] flex flex-col pb-6 px-1"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <main className="flex-1 flex flex-col items-center justify-center relative rounded-[3rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl overflow-hidden shadow-2xl">
                        {/* Radial Gradient Glow as requested */}
                        <div
                            className="absolute inset-0 pointer-events-none z-0"
                            style={{
                                background: 'radial-gradient(circle at center, #28492C 0%, #1F3522 40%, #152018 100%)',
                                opacity: 0.2
                            }}
                        />

                        {/* Hero Content */}
                        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl px-4 animate-in fade-in duration-1000 slide-in-from-bottom-8">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
                                <span className="text-white">The Operating</span><br />
                                <span className="text-[#42C971]">System for Revenue</span><br />
                                <span className="text-white">Reactivation.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/50 max-w-xl font-light tracking-wide leading-relaxed">
                                Automation infrastructure that converts dead leads into active revenue.
                            </p>
                        </div>
                    </main>
                </motion.section>

                <SectionDivider />

                {/* Experiences Section Component - Full Viewport Height */}
                <motion.section
                    className="w-full min-h-screen flex flex-col justify-center py-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.08 }}
                >
                    <Experiences />
                </motion.section>

                <SectionDivider />

                {/* Problem Section Component - Framer Motion sticky layout handles its own height */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.04 }}
                >
                    <Problem />
                </motion.section>

                <SectionDivider />

                {/* Solution Section Component - Framer Motion sticky layout handles its own height */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.04 }}
                >
                    <Solution />
                </motion.section>

                <SectionDivider />

                {/* Call To Action Section */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <CallToAction />
                </motion.section>
            </div>
        </div>
    );
}

