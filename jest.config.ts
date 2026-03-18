import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
        '\\.(jpg|jpeg|png|gif|webp|svg|avif)$': '<rootDir>/__mocks__/fileMock.ts',
        '@splinetool/react-spline(.*)': '<rootDir>/__mocks__/spline.tsx',
        '^framer-motion$': '<rootDir>/__mocks__/framer-motion.tsx',
        '^next/dynamic$': '<rootDir>/__mocks__/nextDynamic.tsx',
    },
    // Solo archivos *.test.* son suites de test
    testMatch: ['<rootDir>/__tests__/**/*.test.{ts,tsx}'],
    collectCoverageFrom: [
        'app/**/*.{ts,tsx}',
        '!app/**/*.d.ts',
        '!app/layout.tsx',
        '!app/page.tsx',
    ],
};

export default createJestConfig(config);
