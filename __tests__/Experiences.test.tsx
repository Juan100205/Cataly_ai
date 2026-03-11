import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Experiences from '../app/components/Experiences';

describe('Experiences', () => {
    it('renders section heading', () => {
        renderWithProviders(<Experiences />);
        expect(screen.getByText(/El Estándar de la Nueva Economía/i)).toBeInTheDocument();
    });

    it('renders the 3 metric values', () => {
        renderWithProviders(<Experiences />);
        expect(screen.getByText('-400%')).toBeInTheDocument();
        expect(screen.getByText('47%')).toBeInTheDocument();
        expect(screen.getByText('+50%')).toBeInTheDocument();
    });

    it('renders the 3 fact titles', () => {
        renderWithProviders(<Experiences />);
        expect(screen.getByText('La Regla de los 5 Minutos')).toBeInTheDocument();
        expect(screen.getByText('El Agujero Negro del CRM')).toBeInTheDocument();
        expect(screen.getByText('La Brecha de Adopción')).toBeInTheDocument();
    });

    it('renders fact body text', () => {
        renderWithProviders(<Experiences />);
        expect(screen.getByText(/Harvard Business Review/i)).toBeInTheDocument();
        expect(screen.getByText(/Agujero Negro del CRM/i)).toBeInTheDocument();
    });
});
