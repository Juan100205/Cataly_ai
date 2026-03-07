"use client";

import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import Experiences from '../components/Experiences';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import CallToAction from '../components/CallToAction';
import { useLang } from '../i18n/LangContext';

// Expo-out: rápido al principio, se desacelera suavemente al final
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.4, ease: EXPO_OUT }
    }
};

function SectionDivider() {
    return (
        <div className="w-full flex justify-center py-2 pointer-events-none select-none" aria-hidden>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
    );
}

export default function Home() {
    const { t } = useLang();

    // Parallax del hero: el contenido sube lentamente al hacer scroll
    const { scrollY } = useScroll();
    const rawHeroY = useTransform(scrollY, [0, 600], [0, -70]);
    const heroY = useSpring(rawHeroY, { stiffness: 60, damping: 30, mass: 0.8 });
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.15]);

    return (
        <div className="min-h-screen bg-transparent flex flex-col p-3 md:p-5 font-sans selection:bg-[#42C971]/30">
            <div className="w-full flex flex-col pt-20">

                {/* Hero */}
                <motion.section
                    className="w-full min-h-[calc(100vh-100px)] flex flex-col pb-5 px-1"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <main className="flex-1 flex flex-col items-center justify-center relative rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl overflow-hidden shadow-2xl">
                        {/* Radial glow */}
                        <div
                            className="absolute inset-0 pointer-events-none z-0"
                            style={{
                                background: 'radial-gradient(circle at center, #28492C 0%, #1F3522 40%, #152018 100%)',
                                opacity: 0.2
                            }}
                        />
                        {/* Contenido con parallax */}
                        <motion.div
                            style={{ y: heroY, opacity: heroOpacity }}
                            className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl px-4"
                        >
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.1 }}
                            >
                                <span className="text-white">{t.hero.line1}</span><br />
                                <span className="text-[#42C971]">{t.hero.line2}</span>
                                {t.hero.line3 && <><br /><span className="text-white">{t.hero.line3}</span></>}
                            </motion.h1>
                            <motion.p
                                className="text-base md:text-lg text-white/60 max-w-xl font-light tracking-wide leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.25 }}
                            >
                                {t.hero.subtitle}
                            </motion.p>
                        </motion.div>
                    </main>
                </motion.section>

                <SectionDivider />

                {/* Experiences */}
                <motion.section
                    className="w-full min-h-screen flex flex-col justify-center py-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.06 }}
                >
                    <Experiences />
                </motion.section>

                <SectionDivider />

                {/* Problem */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.03 }}
                >
                    <Problem />
                </motion.section>

                <SectionDivider />

                {/* Solution */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.03 }}
                >
                    <Solution />
                </motion.section>

                <SectionDivider />

                {/* CTA */}
                <motion.section
                    className="w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false, amount: 0.08 }}
                >
                    <CallToAction />
                </motion.section>

            </div>
        </div>
    );
}
