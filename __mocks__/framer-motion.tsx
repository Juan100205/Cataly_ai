const React = require('react');

const motion = new Proxy({}, {
    get: (_: unknown, tag: string) => {
        const Component = React.forwardRef(({ children, ...props }: Record<string, unknown>, ref: unknown) => {
            const filtered = Object.fromEntries(
                Object.entries(props).filter(([k]) =>
                    !['animate', 'initial', 'exit', 'transition', 'variants', 'whileHover',
                      'whileTap', 'whileInView', 'style', 'viewport'].includes(k)
                )
            );
            return React.createElement(tag, { ...filtered, ref }, children);
        });
        Component.displayName = `motion.${tag}`;
        return Component;
    },
});

const AnimatePresence = ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children);
const useScroll = () => ({ scrollYProgress: { get: () => 0 } });
const useTransform = (_: unknown, __: unknown, output: unknown[]) => ({ get: () => output[0] });
const useSpring = (v: unknown) => v;

module.exports = { motion, AnimatePresence, useScroll, useTransform, useSpring };
