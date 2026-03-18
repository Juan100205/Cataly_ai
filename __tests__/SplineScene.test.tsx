import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SplineScene from '../app/components/SplineScene';
import { LoadingProvider, useLoading } from '../app/i18n/LoadingContext';

function ReadyProbe() {
    const { splineReady } = useLoading();
    return <span data-testid="ready">{String(splineReady)}</span>;
}

describe('SplineScene', () => {
    it('renderiza sin crash y muestra el componente Spline', async () => {
        render(<LoadingProvider><SplineScene /></LoadingProvider>);
        // React.lazy resuelve async — esperamos que el mock aparezca en DOM
        await waitFor(() => {
            expect(screen.getByTestId('spline-mock')).toBeInTheDocument();
        });
    });

    it('onLoad de Spline propaga splineReady=true al contexto', async () => {
        render(
            <LoadingProvider>
                <SplineScene />
                <ReadyProbe />
            </LoadingProvider>
        );
        // El mock de Spline llama onLoad en useEffect — waitFor espera el flush
        await waitFor(() => {
            expect(screen.getByTestId('ready').textContent).toBe('true');
        });
    });
});
