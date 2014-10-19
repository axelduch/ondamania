module.exports = {
    dedicated: {
        appearance: require('./components/dedicated/appearance.js'),
        position: require('./components/dedicated/position.js'),
        context2d: require('./components/dedicated/context2d.js')
    },
    shared: {
        time: require('./components/shared/time.js')
    }
};
