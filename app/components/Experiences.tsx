"use client";

import React, { useRef } from 'react';

// HeroIcons Placeholder SVGs for UI replication
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mx-auto text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.974 0-5.748.11-8.318.315m16.16 0A8.99 8.99 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mx-auto text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.84 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
);

const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mx-auto text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export default function Experiences() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            const maxScroll = container.scrollWidth - container.clientWidth;

            // If at the end, scroll back to beginning
            if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.clientWidth * 0.8;

            // If at the beginning, scroll to the end
            if (container.scrollLeft <= 10) {
                container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-6">
            <div className="relative group">

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth"
                >

                    {/* Card 1 (Repeated to show scroll capability) */}
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="flex-none w-full min-w-[300px] md:min-w-[800px] snap-center">
                            <div className="flex flex-col rounded-[2rem] border border-white/[0.05] bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">

                                {/* Title Section */}
                                <div className="pt-12 text-center border-b border-white/[0.05] relative">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-20 px-4">
                                        Our experiences speak for us
                                    </h2>

                                    {/* Icons Grid Area */}
                                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 px-0 mb-0">
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <GlobeIcon />
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <ChatIcon />
                                        </div>
                                        <div className="flex flex-col items-center justify-end p-15 relative group-hover/text:opacity-100 bg-gradient-to-t from-[#28492C]/40 to-transparent">
                                            <DatabaseIcon />
                                            <div className="absolute -bottom-8 w-full text-center">
                                                {/* Adding subtle green gradient text requested in the image */}
                                                <p className="text-xs text-white/50  pb-10 rounded-lg">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Section */}
                                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                                    <div className="flex flex-col items-center justify-center py-12 px-6">
                                        <span className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">&lt;60</span>
                                        <span className="text-sm md:text-base text-white/50 tracking-wide font-light">Average Response Time (Seconds)</span>
                                    </div>

                                    <div className="flex flex-col items-center justify-center py-12 px-6">
                                        <span className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">40%-60%</span>
                                        <span className="text-sm md:text-base text-white/50 tracking-wide font-light">Lead Reactivation Rate</span>
                                    </div>

                                    <div className="flex flex-col items-center justify-center pb-12 px-6">
                                        <span className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">99.9%</span>
                                        <span className="text-sm md:text-base text-white/50 tracking-wide font-light">Core Availability</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Left Scroll Indicator Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 md:-translate-x-1/2 -translate-y-1/2 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.1] bg-black/50 backdrop-blur-md shadow-xl lg:left-[-20px] 2xl:left-[-40px] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(66,201,113,0.4)] hover:border-[#42C971]/40 transition-all active:scale-95 cursor-pointer group/arrow-left"
                    aria-label="Scroll left"
                >
                    <div className="group-hover/arrow-left:text-[#42C971] transition-colors">
                        <ArrowLeftIcon />
                    </div>
                </button>

                {/* Right Scroll Indicator Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 md:translate-x-1/2 -translate-y-1/2 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.1] bg-black/50 backdrop-blur-md shadow-xl lg:right-[-20px] 2xl:right-[-40px] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(66,201,113,0.4)] hover:border-[#42C971]/40 transition-all active:scale-95 cursor-pointer group/arrow-right"
                    aria-label="Scroll right"
                >
                    <div className="group-hover/arrow-right:text-[#42C971] transition-colors">
                        <ArrowRightIcon />
                    </div>
                </button>

            </div>
        </div>
    );
}
