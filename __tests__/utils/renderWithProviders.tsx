import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LangProvider } from '../../app/i18n/LangContext';
import { ThemeProvider } from '../../app/i18n/ThemeContext';
import { DemoModalProvider } from '../../app/i18n/DemoModalContext';
import DemoModal from '../../app/components/DemoModal';

function AllProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LangProvider>
                <DemoModalProvider>
                    {children}
                    <DemoModal />
                </DemoModalProvider>
            </LangProvider>
        </ThemeProvider>
    );
}

export function renderWithProviders(ui: React.ReactElement, options?: RenderOptions) {
    return render(ui, { wrapper: AllProviders, ...options });
}
