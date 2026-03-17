const React = require('react');

const Spline = ({ scene, ...props }: { scene: string; [key: string]: unknown }) =>
    React.createElement('div', { 'data-testid': 'spline-mock', 'data-scene': scene, ...props });

module.exports = Spline;
module.exports.default = Spline;
