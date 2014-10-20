module.exports = function rotation(params) {
    params = params || {};

    return {
        name: 'rotation',
        value: +params.value || 0
    };
};
