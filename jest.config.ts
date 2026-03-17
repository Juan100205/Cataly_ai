import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.ts',
        '\\.(jpg|jpeg|png|gif|webp|svg|avif)$': '<rootDir>/__mocks__/fileMock.ts',
        '^@splinetool/react-spline$': '<rootDir>/__mocks__/spline.tsx',
        '^@/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
    collectCoverageFrom: [
        'app/components/**/*.{ts,tsx}',
        '!app/components/**/*.d.ts',
    ],
};

export default config;
