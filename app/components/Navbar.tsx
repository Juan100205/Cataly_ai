"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/Logo_white.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 group ${isScrolled ? 'pt-4' : 'pt-6'
                }`}
            style={{ transition: 'padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
            <div className={`w-full max-w-7xl flex items-center justify-between px-6 py-2 rounded-[2rem] cursor-default ${isScrolled
                ? 'backdrop-blur-xl bg-[#0D0D0D]/60 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-95 opacity-80 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[#0D0D0D]/80'
                : 'backdrop-blur-none bg-transparent border-transparent scale-100 opacity-100'
                }`}
                style={{ transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}>

                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer">
                    <Image src={LogoWhite} alt="Logo" width={100} height={100} />
                </Link>


                <nav className={`hidden md:flex items-center space-x-8 px-8 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'bg-transparent border-transparent shadow-none' : 'bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
                    }`}>
                    <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">System</Link>
                    <Link href="/product" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Product</Link>
                    <Link href="/results" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Results</Link>
                    <Link href="/security" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Security</Link>
                    <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">About</Link>
                </nav>

                {/* Right Action */}
                <div className="flex items-center">
                    <Link href="/deploy">
                        <button className="text-sm font-medium text-white/90 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-[#42C971]/30 hover:shadow-[0_0_20px_rgba(66,201,113,0.35)] cursor-pointer" style={{ transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}>
                            Deploy System
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    );
}
