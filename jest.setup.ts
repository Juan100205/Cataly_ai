import '@testing-library/jest-dom';

// Mock window.matchMedia (not available in jsdom)
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

// Mock localStorage — pre-seed Spanish so LangContext defaults to 'es'
const localStorageMock = (() => {
    const store: Record<string, string> = { 'cataly-lang': 'es', 'cataly-theme': 'dark' };
    return {
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => { store[key] = value; },
        removeItem: (key: string) => { delete store[key]; },
        clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
