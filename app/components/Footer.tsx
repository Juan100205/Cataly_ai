"use client";

import React from 'react';
import Link from 'next/link';
import { useLang } from '../i18n/LangContext';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-white transition-colors cursor-pointer">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-white transition-colors cursor-pointer">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const MetaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-white transition-colors cursor-pointer">
        <path d="M4 12C4 8.68629 6.68629 6 10 6C11.5362 6 12.9372 6.57866 14 7.53512C15.0628 6.57866 16.4638 6 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18C16.4638 18 15.0628 17.4213 14 16.4649C12.9372 17.4213 11.5362 18 10 18C6.68629 18 4 15.3137 4 12Z" />
        <path d="M14 7.53512L10 16.4649" />
    </svg>
);

const footerCompanyLinks = ['/about', '/about', '/about', '/about'];
const footerPrivacyLinks = ['/privacy', '/data-protection'];

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="w-full bg-[#0A0A0C] pt-20 pb-10 px-5 relative mt-10 rounded-[2.5rem] border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10">

                {/* Green Accent Line */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-80 mb-12 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

                    {/* Logo Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-1 mb-4 cursor-pointer">
                            <span className="text-xl font-medium tracking-tight text-white">cataly.ai</span>
                        </Link>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-medium mb-4">{t.footer.companyHeading}</h4>
                        <ul className="space-y-3">
                            {t.footer.companyLinks.map((label, i) => (
                                <li key={i}>
                                    <Link href={footerCompanyLinks[i]} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Privacy Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-medium mb-4">{t.footer.privacyHeading}</h4>
                        <ul className="space-y-3">
                            {t.footer.privacyLinks.map((label, i) => (
                                <li key={i}>
                                    <Link href={footerPrivacyLinks[i]} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full mt-auto">
                    <div className="flex space-x-5 text-white/50 mb-5 md:mb-0">
                        <InstagramIcon />
                        <WhatsAppIcon />
                        <MetaIcon />
                    </div>
                    <div className="text-sm text-white/30 font-light">
                        {t.footer.copyright}
                    </div>
                </div>

            </div>
        </footer>
    );
}
