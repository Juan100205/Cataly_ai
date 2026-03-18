import React from 'react';
import { render, screen, act } from '@testing-library/react';
import PageLoader from '../app/components/PageLoader';
import { LoadingProvider, useLoading } from '../app/i18n/LoadingContext';

jest.useFakeTimers();

function Wrapper({ children }: { children: React.ReactNode }) {
    return <LoadingProvider>{children}</LoadingProvider>;
}

function SplineTrigger() {
    const { setSplineReady } = useLoading();
    return <button data-testid="trigger" onClick={setSplineReady} />;
}

describe('PageLoader — secuencia de carga', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });
    });

    afterEach(() => {
        act(() => { jest.runAllTimers(); });
    });

    it('es visible al montar', () => {
        render(<Wrapper><PageLoader /></Wrapper>);
        expect(screen.getByText('Cataly')).toBeInTheDocument();
    });

    it('NO desaparece antes de MIN_MS aunque splineReady sea true', () => {
        render(<Wrapper><PageLoader /><SplineTrigger /></Wrapper>);
        act(() => { screen.getByTestId('trigger').click(); });
        act(() => { jest.advanceTimersByTime(500); });
        expect(screen.getByText('Cataly')).toBeInTheDocument();
    });

    it('desaparece en desktop cuando MIN_MS pasa Y splineReady=true', () => {
        render(<Wrapper><PageLoader /><SplineTrigger /></Wrapper>);
        act(() => { screen.getByTestId('trigger').click(); });
        act(() => { jest.advanceTimersByTime(1600); });
        expect(screen.queryByText('Cataly')).toBeNull();
    });

    it('NO desaparece en desktop si solo pasa MIN_MS sin splineReady', () => {
        render(<Wrapper><PageLoader /></Wrapper>);
        act(() => { jest.advanceTimersByTime(1600); });
        expect(screen.getByText('Cataly')).toBeInTheDocument();
    });

    it('desaparece en móvil solo con MIN_MS (sin esperar Spline)', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 });
        render(<Wrapper><PageLoader /></Wrapper>);
        act(() => { jest.advanceTimersByTime(1600); });
        expect(screen.queryByText('Cataly')).toBeNull();
    });

    it('desaparece por fallback MAX_MS si Spline nunca carga', () => {
        render(<Wrapper><PageLoader /></Wrapper>);
        act(() => { jest.advanceTimersByTime(9000); });
        expect(screen.queryByText('Cataly')).toBeNull();
    });
});
