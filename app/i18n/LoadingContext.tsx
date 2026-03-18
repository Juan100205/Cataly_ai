"use client";

import { createContext, useContext, useState, useCallback } from 'react';

interface LoadingContextValue {
    splineReady: boolean;
    setSplineReady: () => void;
}

const LoadingContext = createContext<LoadingContextValue>({
    splineReady: false,
    setSplineReady: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [splineReady, setSplineReadyState] = useState(false);
    const setSplineReady = useCallback(() => setSplineReadyState(true), []);

    return (
        <LoadingContext.Provider value={{ splineReady, setSplineReady }}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);
