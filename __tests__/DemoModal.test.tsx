import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import DemoModal from '../app/components/DemoModal';
import { ThemeProvider } from '../app/i18n/ThemeContext';
import { LangProvider } from '../app/i18n/LangContext';
import { DemoModalProvider, useDemoModal } from '../app/i18n/DemoModalContext';

// Helper: renders modal in open state by triggering open() inside a child
function ModalOpener() {
    const { open } = useDemoModal();
    return (
        <>
            <button onClick={open}>Open</button>
            <DemoModal />
        </>
    );
}

function renderModal() {
    return render(
        <ThemeProvider>
            <LangProvider>
                <DemoModalProvider>
                    <ModalOpener />
                </DemoModalProvider>
            </LangProvider>
        </ThemeProvider>
    );
}

describe('DemoModal', () => {
    it('does not render the iframe when closed', () => {
        renderModal();
        expect(screen.queryByTitle(/Agendar Demo Privada/i)).not.toBeInTheDocument();
    });

    it('renders the iframe when opened', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        expect(screen.getByTitle(/Agendar Demo Privada/i)).toBeInTheDocument();
    });

    it('iframe src points to Calendly management-catalylabs', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        const iframe = screen.getByTitle(/Agendar Demo Privada/i);
        expect(iframe.getAttribute('src')).toContain('calendly.com/management-catalylabs');
    });

    it('renders the header label when open', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        expect(screen.getByText(/Cataly AI — Private Access/i)).toBeInTheDocument();
    });

    it('renders the modal heading in Spanish', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        expect(screen.getByText('Agenda tu Demo Privada')).toBeInTheDocument();
    });

    it('closes when the close button is clicked', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        expect(screen.getByTitle(/Agendar Demo Privada/i)).toBeInTheDocument();
        const closeBtn = screen.getByLabelText('Close');
        fireEvent.click(closeBtn);
        expect(screen.queryByTitle(/Agendar Demo Privada/i)).not.toBeInTheDocument();
    });

    it('closes when the backdrop is clicked', () => {
        renderModal();
        fireEvent.click(screen.getByText('Open'));
        // The backdrop is a fixed overlay div that handles close on click
        const backdrop = document.querySelector('div[class*="bg-black"]') as HTMLElement;
        if (backdrop) fireEvent.click(backdrop);
        expect(screen.queryByTitle(/Agendar Demo Privada/i)).not.toBeInTheDocument();
    });
});
