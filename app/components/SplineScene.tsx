"use client";

import dynamic from 'next/dynamic';
import { useLoading } from '../i18n/LoadingContext';

// Igual que Problem.tsx y Solution.tsx — ssr:false evita error en server
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineScene() {
    const { setSplineReady } = useLoading();
    return (
        <Spline
            scene="https://prod.spline.design/9Pkj5s6nvYyy9e8a/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={setSplineReady}
        />
    );
}
