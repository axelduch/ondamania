module.exports = function appearance(params) {
    params = params || {};

    return {
        name: 'appearance',
        width: +params.width || 1,
        height: +params.height || 1,
        color: params.color || {
            r: 127,
            g: 127,
            b: 127,
            a: 1
        }
    };
};
