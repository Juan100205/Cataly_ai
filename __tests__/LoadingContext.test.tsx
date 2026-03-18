import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { LoadingProvider, useLoading } from '../app/i18n/LoadingContext';

function Probe() {
    const { splineReady, setSplineReady } = useLoading();
    return (
        <div>
            <span data-testid="ready">{String(splineReady)}</span>
            <button onClick={setSplineReady}>load</button>
        </div>
    );
}

describe('LoadingContext', () => {
    it('empieza con splineReady=false', () => {
        render(<LoadingProvider><Probe /></LoadingProvider>);
        expect(screen.getByTestId('ready').textContent).toBe('false');
    });

    it('setSplineReady cambia splineReady a true', () => {
        render(<LoadingProvider><Probe /></LoadingProvider>);
        act(() => { screen.getByRole('button').click(); });
        expect(screen.getByTestId('ready').textContent).toBe('true');
    });

    it('setSplineReady es estable (misma referencia en re-renders)', () => {
        const refs: unknown[] = [];
        function RefCapture() {
            const { setSplineReady } = useLoading();
            refs.push(setSplineReady);
            return null;
        }
        const { rerender } = render(<LoadingProvider><RefCapture /></LoadingProvider>);
        rerender(<LoadingProvider><RefCapture /></LoadingProvider>);
        // useCallback garantiza referencia estable
        expect(refs[0]).toBe(refs[1]);
    });
});
