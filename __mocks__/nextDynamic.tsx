import React from 'react';

type Factory<T> = () => Promise<{ default: T }>;
type Options = { ssr?: boolean; loading?: () => React.ReactNode };

/**
 * Mock de next/dynamic para tests: usa React.lazy + Suspense en lugar del
 * LoadableComponent de Next, evitando actualizaciones de estado fuera de act().
 */
export default function dynamic<T extends React.ComponentType<any>>(
    factory: Factory<T>,
    _options?: Options
): React.FC<React.ComponentProps<T>> {
    const LazyComponent = React.lazy(factory);
    const MockDynamic: React.FC<React.ComponentProps<T>> = (props) => (
        <React.Suspense fallback={null}>
            <LazyComponent {...(props as any)} />
        </React.Suspense>
    );
    MockDynamic.displayName = 'MockDynamic';
    return MockDynamic;
}
