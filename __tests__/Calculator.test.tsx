import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Calculator from '../app/components/Calculator';

describe('Calculator', () => {
    it('renders the heading', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText('Calcula el Costo de tu Latencia')).toBeInTheDocument();
    });

    it('renders the subheading', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText(/cuánto capital estás perdiendo/i)).toBeInTheDocument();
    });

    it('renders the Revenue Intelligence label', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText(/Revenue Intelligence/i)).toBeInTheDocument();
    });

    it('renders slider 1 label — Leads Inactivos en CRM', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText('Leads Inactivos en CRM')).toBeInTheDocument();
    });

    it('renders slider 2 label — Ticket Promedio de Venta', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText('Ticket Promedio de Venta (USD)')).toBeInTheDocument();
    });

    it('renders output label — Capital Latente a Recuperar', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText('Capital Latente a Recuperar')).toBeInTheDocument();
    });

    it('renders footnote', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText(/tasa conservadora/i)).toBeInTheDocument();
    });

    it('computes initial output: 1000 leads × 1% × $5000 = $50,000', () => {
        renderWithProviders(<Calculator />);
        expect(screen.getByText('$50,000')).toBeInTheDocument();
    });

    it('updates output when leads slider changes', () => {
        renderWithProviders(<Calculator />);
        const sliders = screen.getAllByRole('slider');
        fireEvent.change(sliders[0], { target: { value: '2000' } });
        // 2000 × 0.01 × 5000 = 100,000
        expect(screen.getByText('$100,000')).toBeInTheDocument();
    });

    it('updates output when ticket slider changes', () => {
        renderWithProviders(<Calculator />);
        const sliders = screen.getAllByRole('slider');
        fireEvent.change(sliders[1], { target: { value: '10000' } });
        // 1000 × 0.01 × 10000 = 100,000
        expect(screen.getByText('$100,000')).toBeInTheDocument();
    });

    it('formats large values as $XM', () => {
        renderWithProviders(<Calculator />);
        const sliders = screen.getAllByRole('slider');
        fireEvent.change(sliders[0], { target: { value: '10000' } });
        fireEvent.change(sliders[1], { target: { value: '50000' } });
        // 10000 × 0.01 × 50000 = 5,000,000 → $5.0M
        expect(screen.getByText('$5.0M')).toBeInTheDocument();
    });

    it('renders CTA button and opens modal on click', () => {
        renderWithProviders(<Calculator />);
        const cta = screen.getByText('Agendar Demo Privada para mi Empresa');
        expect(cta).toBeInTheDocument();
        fireEvent.click(cta);
        expect(screen.getByTitle(/Agendar Demo Privada/i)).toBeInTheDocument();
    });
});
