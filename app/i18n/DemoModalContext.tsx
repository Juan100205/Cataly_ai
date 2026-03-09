"use client";

import React, { createContext, useContext, useState } from 'react';

type DemoModalContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const DemoModalContext = createContext<DemoModalContextType>({
    isOpen: false,
    open: () => {},
    close: () => {},
});

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <DemoModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
            {children}
        </DemoModalContext.Provider>
    );
}

export function useDemoModal() {
    return useContext(DemoModalContext);
}
