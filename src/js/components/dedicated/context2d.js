module.exports = function context2d(params) {
    params = params || {};

    return {
        name: 'context2d',
        value: params.value || null
    };
};
