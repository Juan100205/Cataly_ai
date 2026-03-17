import React from 'react';
import Home from './pages/Home';

export default function App({ splineScene }: { splineScene?: React.ReactNode }) {
    return (
        <React.Fragment>
            <Home splineScene={splineScene} />
        </React.Fragment>
    );
}
