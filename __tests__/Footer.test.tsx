import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Footer from '../app/components/Footer';

jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
        <a href={href} {...props}>{children}</a>,
}));

describe('Footer', () => {
    it('renders brand name', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('cataly.ai')).toBeInTheDocument();
    });

    it('renders company section heading', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('Empresa')).toBeInTheDocument();
    });

    it('renders all company links', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('Nuestra misión')).toBeInTheDocument();
        expect(screen.getByText('Nuestra visión')).toBeInTheDocument();
        expect(screen.getByText('Nuestra historia')).toBeInTheDocument();
        expect(screen.getByText('Conoce nuestro equipo')).toBeInTheDocument();
    });

    it('renders privacy section heading', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('Privacidad')).toBeInTheDocument();
    });

    it('renders privacy links', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('Política de privacidad')).toBeInTheDocument();
        expect(screen.getByText('Protección de datos')).toBeInTheDocument();
    });

    it('renders copyright notice', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText(/© 2026 Cataly AI/i)).toBeInTheDocument();
        expect(screen.getByText(/Infraestructura Confidencial/i)).toBeInTheDocument();
    });

    it('privacy link points to /privacy', () => {
        renderWithProviders(<Footer />);
        const privacyLink = screen.getByText('Política de privacidad').closest('a');
        expect(privacyLink).toHaveAttribute('href', '/privacy');
    });

    it('data protection link points to /data-protection', () => {
        renderWithProviders(<Footer />);
        const dataLink = screen.getByText('Protección de datos').closest('a');
        expect(dataLink).toHaveAttribute('href', '/data-protection');
    });
});
