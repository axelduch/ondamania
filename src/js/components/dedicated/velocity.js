module.exports = function velocity(params) {
    params = params || {};

    return {
        name: 'velocity',
        x: +params.x || 0,
        y: +params.y || 0
    };
};
