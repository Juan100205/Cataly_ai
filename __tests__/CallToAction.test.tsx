import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import CallToAction from '../app/components/CallToAction';

describe('CallToAction', () => {
    it('renders the CTA text', () => {
        renderWithProviders(<CallToAction />);
        expect(screen.getByText('Agendar Demo Privada para mi Empresa')).toBeInTheDocument();
    });

    it('opens the demo modal on click', () => {
        renderWithProviders(<CallToAction />);
        const card = screen.getByText('Agendar Demo Privada para mi Empresa').closest('div');
        fireEvent.click(card!);
        expect(screen.getByTitle(/Agendar Demo Privada/i)).toBeInTheDocument();
    });

    it('renders the arrow icon', () => {
        renderWithProviders(<CallToAction />);
        const svg = document.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});
