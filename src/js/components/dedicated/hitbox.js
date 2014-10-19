module.exports = function hitbox(params) {
    params = params || {};

    return {
        name: 'hitbox',
        // default value for "on" is true
        width: +params.width || 0,
        height: +params.height || 0,
        on: (params.on !== undefined) ? (!!params.on) : true
    };
};
