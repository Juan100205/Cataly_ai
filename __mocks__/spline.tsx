import React from 'react';

const Spline = ({ onLoad, scene, style }: {
    onLoad?: (app: unknown) => void;
    scene?: string;
    style?: React.CSSProperties;
}) => {
    React.useEffect(() => {
        onLoad?.({}); // simula que Spline cargó inmediatamente
    }, [onLoad]);
    return <div data-testid="spline-mock" data-scene={scene} style={style} />;
};

export default Spline;
