import React from 'react';

const motion: Record<string, React.FC<React.HTMLAttributes<HTMLElement> & Record<string, unknown>>> = new Proxy({}, {
    get: (_target, tag: string) => {
        const Component = ({ children, ...props }: React.HTMLAttributes<HTMLElement> & Record<string, unknown>) => {
            // strip framer-specific props to avoid DOM warnings
            const { initial, animate, exit, transition, variants, whileHover, whileTap, whileInView, viewport, layout, layoutId, style, ...rest } = props;
            void initial; void animate; void exit; void transition; void variants;
            void whileHover; void whileTap; void whileInView; void viewport; void layout; void layoutId;
            return React.createElement(tag as keyof JSX.IntrinsicElements, { style: style as React.CSSProperties, ...rest }, children);
        };
        Component.displayName = `motion.${tag}`;
        return Component;
    },
});

export { motion };

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const useScroll = () => ({ scrollY: { get: () => 0 } });
export const useTransform = (_val: unknown, _from: unknown, _to: unknown) => 0;
export const useSpring = (val: unknown) => val;
export const useInView = () => true;
export const useMotionValue = (init: unknown) => ({ get: () => init, set: () => {} });
