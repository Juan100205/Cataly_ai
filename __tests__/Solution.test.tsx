import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Solution from '../app/components/Solution';

describe('Solution', () => {
    it('renders the section heading', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/infraestructura neuronal/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/los ingresos/i).length).toBeGreaterThan(0);
    });

    it('renders subheading', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/latencia humana/i).length).toBeGreaterThan(0);
    });

    it('renders the main card — lead filtering', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/Filtrado/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/leads/i).length).toBeGreaterThan(0);
    });

    it('renders main card CTA button', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText('Agendar Demo Privada').length).toBeGreaterThan(0);
    });

    it('opens demo modal when main card CTA is clicked', () => {
        renderWithProviders(<Solution />);
        const ctaButtons = screen.getAllByText('Agendar Demo Privada');
        fireEvent.click(ctaButtons[0]);
        // Modal should appear with Calendly iframe
        expect(screen.getByTitle(/Agendar Demo Privada/i)).toBeInTheDocument();
    });

    it('renders secondary card 1 — automated pipeline', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/Pipeline/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/automatizado/i).length).toBeGreaterThan(0);
    });

    it('renders secondary card 2 — enterprise privacy', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/nivel empresarial/i).length).toBeGreaterThan(0);
    });

    it('renders secondary card 3 — zero latency', () => {
        renderWithProviders(<Solution />);
        expect(screen.getAllByText(/latencia/i).length).toBeGreaterThan(0);
    });
});
