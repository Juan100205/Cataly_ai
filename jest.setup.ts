import '@testing-library/jest-dom';

// jsdom no implementa matchMedia — necesario para ThemeContext
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }),
});

// innerWidth por defecto: desktop
Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1280,
});
