"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
    end: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
    className?: string;
}

export default function CountUp({
    end,
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 2.4,
    className,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [count, setCount] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!isInView || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        const durationMs = duration * 1000;

        function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }, [isInView, end, duration]);

    const formatted =
        decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

    return (
        <span ref={ref} className={className}>
            {prefix}{formatted}{suffix}
        </span>
    );
}

// Helper: parse a metric string like "-400%", "+50%", "<60s", "10.5M+"
// Returns { prefix, end, suffix, decimals }
export function parseMetric(str: string): {
    prefix: string;
    end: number;
    suffix: string;
    decimals: number;
} {
    const match = str.match(/^([+\-<]?)(\d+\.?\d*)(.*)/);
    if (!match) return { prefix: '', end: 0, suffix: str, decimals: 0 };
    const rawNum = match[2];
    const decimals = rawNum.includes('.') ? rawNum.split('.')[1].length : 0;
    return {
        prefix: match[1],
        end: parseFloat(rawNum),
        suffix: match[3],
        decimals,
    };
}
