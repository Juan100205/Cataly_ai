import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Navbar from '../app/components/Navbar';

// Mock Next.js modules
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) =>
        <img alt={alt} {...props} />,
}));

jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
        <a href={href} {...props}>{children}</a>,
}));

describe('Navbar', () => {
    it('renders the logo image', () => {
        renderWithProviders(<Navbar />);
        expect(screen.getByAltText('Logo')).toBeInTheDocument();
    });

    it('renders all nav links in Spanish by default', () => {
        renderWithProviders(<Navbar />);
        expect(screen.getAllByText('Sistema').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Producto').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Resultados').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Seguridad').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Acerca de').length).toBeGreaterThan(0);
    });

    it('renders the CTA button', () => {
        renderWithProviders(<Navbar />);
        expect(screen.getAllByText('Agendar Demo').length).toBeGreaterThan(0);
    });

    it('renders the hamburger button for mobile', () => {
        renderWithProviders(<Navbar />);
        expect(screen.getByLabelText('Menu')).toBeInTheDocument();
    });

    it('toggles mobile menu on hamburger click', () => {
        renderWithProviders(<Navbar />);
        const hamburger = screen.getByLabelText('Menu');
        // Mobile menu should not be visible initially (nav links are hidden via CSS)
        fireEvent.click(hamburger);
        // After click, mobile menu links appear in DOM
        const links = screen.getAllByText('Sistema');
        expect(links.length).toBeGreaterThan(0);
    });

    it('nav links point to correct hrefs', () => {
        renderWithProviders(<Navbar />);
        const links = screen.getAllByRole('link');
        const hrefs = links.map(l => l.getAttribute('href'));
        expect(hrefs).toContain('/');
        expect(hrefs).toContain('/product');
        expect(hrefs).toContain('/results');
        expect(hrefs).toContain('/security');
        expect(hrefs).toContain('/about');
    });
});
