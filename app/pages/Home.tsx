"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useLang } from '../i18n/LangContext';
import { useDemoModal } from '../i18n/DemoModalContext';
import { useTheme } from '../i18n/ThemeContext';

import Experiences  from '../components/Experiences';
import Process      from '../components/Process';
import Problem      from '../components/Problem';
import Solution     from '../components/Solution';
import Calculator   from '../components/Calculator';
import CallToAction from '../components/CallToAction';
import DemoModal    from '../components/DemoModal';

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EXPO_OUT }
    }
};

function SectionDivider() {
    const { theme } = useTheme();
    return (
        <div className="w-full flex justify-center py-2 pointer-events-none select-none" aria-hidden>
            <div className={`w-[1px] h-16 bg-gradient-to-b from-transparent ${theme === 'light' ? 'via-black/10' : 'via-white/10'} to-transparent`} />
        </div>
    );
}

// Proof chips — language-aware
const CHIPS = {
    es: [
        { val: '<60s',    label: 'tiempo de respuesta' },
        { val: '30%+',   label: 'debajo del CPL objetivo' },
        { val: '10.5M+', label: 'impresiones orgánicas' },
        { val: '$0.68',  label: 'costo por lead' },
    ],
    en: [
        { val: '<60s',    label: 'first response time' },
        { val: '30%+',   label: 'below target CPL' },
        { val: '10.5M+', label: 'organic impressions' },
        { val: '$0.68',  label: 'cost per lead' },
    ],
} as const;

export default function Home({ splineScene }: { splineScene?: React.ReactNode }) {
    const { t, lang } = useLang();
    const { open } = useDemoModal();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 600], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.15]);

    const chips = CHIPS[lang];
    const badgeText = lang === 'es'
        ? '6,482 leads capturados · CPL $0.68'
        : '6,482 leads captured · CPL $0.68';

    return (
        <div className="min-h-screen bg-transparent flex flex-col p-3 md:p-5 font-sans selection:bg-[#10B981]/30">
            <DemoModal />
            <div className="w-full flex flex-col pt-20">

                {/* ── HERO ── */}
                <motion.section
                    className="w-full min-h-[calc(100vh-120px)] flex flex-col pb-4 px-1"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <main className={`flex-1 relative rounded-[2.5rem] backdrop-blur-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${isLight ? 'border border-black/[0.08] bg-black/[0.02]' : 'border border-white/[0.06] bg-white/[0.01]'}`}>

                        {/* Radial gradient */}
                        <div
                            className="absolute inset-0 pointer-events-none z-0"
                            style={{
                                background: 'radial-gradient(ellipse 90% 55% at 30% -5%, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0.04) 55%, transparent 75%)',
                            }}
                        />

                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0 pointer-events-none z-0"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)',
                                backgroundSize: '64px 64px',
                                maskImage: 'radial-gradient(ellipse 80% 70% at 30% 0%, black 30%, transparent 80%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 30% 0%, black 30%, transparent 80%)',
                            }}
                        />

                        {/* Bottom fade */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-0"
                            style={{ background: isLight ? 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)' : 'linear-gradient(to top, rgba(10,10,12,0.6), transparent)' }}
                        />

                        {/* ── LEFT: contenido ── */}
                        <motion.div
                            style={{ y: heroY, opacity: heroOpacity }}
                            className="relative z-10 flex flex-col justify-center space-y-6 px-6 py-12 sm:px-10 sm:py-16 lg:px-35 lg:py-24"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.9, ease: EXPO_OUT, delay: 0 }}
                                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-[#10B981]/25 bg-[#10B981]/[0.07] backdrop-blur-sm"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                <span className="text-[11px] text-[#10B981] font-medium tracking-[0.18em] uppercase">
                                    {badgeText}
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05]"
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.1 }}
                            >
                                <span className={isLight ? 'text-black' : 'text-white'}>{t.hero.line1}</span><br />
                                <span className="text-[#10B981]">{t.hero.line2}</span>
                                {t.hero.line3 && <><br /><span className={isLight ? 'text-black/80' : 'text-white/90'}>{t.hero.line3}</span></>}
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                className={`text-sm md:text-base max-w-md font-light leading-relaxed ${isLight ? 'text-black/55' : 'text-white/50'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.25 }}
                            >
                                {t.hero.subtitle}
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="flex flex-col sm:flex-row items-start gap-4"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: EXPO_OUT, delay: 0.4 }}
                            >
                                <button
                                    onClick={open}
                                    className="px-8 py-3.5 rounded-2xl bg-[#10B981] text-[#0A0A0C] font-medium text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_32px_rgba(16,185,129,0.55),0_16px_40px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    {t.navbar.cta}
                                </button>
                                <Link
                                    href="/results"
                                    className={`flex items-center gap-1.5 text-sm transition-colors duration-200 self-center ${isLight ? 'text-black/40 hover:text-black/80' : 'text-white/40 hover:text-white/80'}`}
                                >
                                    {t.navbar.results}
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>

                            {/* Proof chips */}
                            <motion.div
                                className="flex flex-wrap gap-2.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.58 }}
                            >
                                {chips.map(({ val, label }) => (
                                    <div
                                        key={val}
                                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border ${
                                            isLight
                                                ? 'bg-black/[0.06] border-black/[0.12] text-black/60'
                                                : 'bg-white/[0.04] border-white/[0.07] text-white/45'
                                        }`}
                                    >
                                        <span className={`font-medium tabular-nums ${isLight ? 'text-black/80' : 'text-white/75'}`}>{val}</span>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT: Spline ── */}
                        <motion.div
                            className="hidden lg:block relative z-10 min-h-[500px] content-top scale-120 origin-top-left"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: isLight ? 1 : 0.6, x: 0 }}
                            transition={{ duration: 1.4, ease: EXPO_OUT, delay: 0.2 }}
                        >
                            <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-white/[0.06] " />
                            {splineScene}
                            {/* Fade inferior para ocultar marca de agua */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
                                style={{ background: isLight ? 'linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)' : 'linear-gradient(to top, rgba(10,10,12,1) 0%, transparent 100%)' }}
                            />
                        </motion.div>
                    </main>
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full flex flex-col justify-center py-32 md:py-40"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.06 }}
                >
                    <Experiences />
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full h-auto py-32 md:py-40"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.04 }}
                >
                    <Process />
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full h-auto py-32 md:py-40"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.03 }}
                >
                    <Problem />
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full h-auto py-32 md:py-40"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.03 }}
                >
                    <Solution />
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full h-auto py-24 md:py-32"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.06 }}
                >
                    <Calculator />
                </motion.section>

                <SectionDivider />

                <motion.section
                    className="w-full h-auto py-24 md:py-32"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.08 }}
                >
                    <CallToAction />
                </motion.section>

            </div>
        </div>
    );
}
