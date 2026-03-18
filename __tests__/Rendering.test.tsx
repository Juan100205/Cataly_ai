/**
 * Tests de renderizado estático — verifica que todos los componentes
 * montan sin crash y sin momentos de carga en el DOM.
 */
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';

// Componentes que antes eran dynamic — ahora deben estar disponibles de inmediato
import Experiences  from '../app/components/Experiences';
import Problem      from '../app/components/Problem';
import Solution     from '../app/components/Solution';
import Calculator   from '../app/components/Calculator';
import CallToAction from '../app/components/CallToAction';
import DemoModal    from '../app/components/DemoModal';

describe('Renderizado sin lazy-loading', () => {
    it('Experiences monta sin error', () => {
        const { container } = renderWithProviders(<Experiences />);
        expect(container.firstChild).toBeTruthy();
    });

    it('Problem monta sin error', () => {
        const { container } = renderWithProviders(<Problem />);
        expect(container.firstChild).toBeTruthy();
    });

    it('Solution monta sin error', () => {
        const { container } = renderWithProviders(<Solution />);
        expect(container.firstChild).toBeTruthy();
    });

    it('Calculator monta sin error y muestra ambos sliders', () => {
        renderWithProviders(<Calculator />);
        // Calculator tiene 2 sliders (Leads y Ticket) — todos en DOM desde el primer render
        const sliders = screen.getAllByRole('slider');
        expect(sliders).toHaveLength(2);
    });

    it('CallToAction monta sin error', () => {
        const { container } = renderWithProviders(<CallToAction />);
        expect(container.firstChild).toBeTruthy();
    });

    it('DemoModal monta sin error (cerrado por defecto)', () => {
        const { container } = renderWithProviders(<DemoModal />);
        // El modal está cerrado — el iframe de Calendly no debe estar en DOM
        expect(container.querySelector('iframe')).toBeNull();
    });
});
