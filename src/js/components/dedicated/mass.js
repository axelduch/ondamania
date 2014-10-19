module.exports = function mass(params) {
    params = params || {};

    return {
        name: 'mass',
        value: +params.value || 1
    };
};
