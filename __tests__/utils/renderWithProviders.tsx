import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LoadingProvider } from '../../app/i18n/LoadingContext';
import { LangProvider } from '../../app/i18n/LangContext';
import { ThemeProvider } from '../../app/i18n/ThemeContext';
import { DemoModalProvider } from '../../app/i18n/DemoModalContext';

function AllProviders({ children }: { children: React.ReactNode }) {
    return (
        <LoadingProvider>
            <ThemeProvider>
                <LangProvider>
                    <DemoModalProvider>{children}</DemoModalProvider>
                </LangProvider>
            </ThemeProvider>
        </LoadingProvider>
    );
}

export function renderWithProviders(ui: React.ReactElement, options?: RenderOptions) {
    return render(ui, { wrapper: AllProviders, ...options });
}
