module.exports = function position(params) {
    params = params || {};

    return {
        name: 'position',
        x: +params.x || 0,
        y: +params.y || 0
    };
};
