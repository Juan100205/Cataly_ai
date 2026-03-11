import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Problem from '../app/components/Problem';

describe('Problem', () => {
    it('renders the section heading parts', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/Tus/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/ingresos/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/están escapando/i).length).toBeGreaterThan(0);
    });

    it('renders the subheading', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/infraestructura de ventas/i).length).toBeGreaterThan(0);
    });

    it('renders card 1 — silence cost', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/El costo/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/minuto/i).length).toBeGreaterThan(0);
    });

    it('renders card 2 — sleeping money', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/Dinero durmiendo/i).length).toBeGreaterThan(0);
    });

    it('renders card 3 — team limits', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/Tu equipo/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/infinito/i).length).toBeGreaterThan(0);
    });

    it('renders card 4 — inaction cost', () => {
        renderWithProviders(<Problem />);
        expect(screen.getAllByText(/La inacción/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/mayor gasto/i).length).toBeGreaterThan(0);
    });
});
