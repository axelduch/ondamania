module.exports = function mass(params) {
    params = params || {};

    return {
        name: 'mass',
        value: +params.value || 1,
        center: params.center || {
            x: 0.5,
            y: 0.5
        }
    };
};
