module.exports = function acceleration(params) {
    params = params || {};

    return {
        name: 'acceleration',
        x: +params.x || 0,
        y: +params.y || 0
    };
};
