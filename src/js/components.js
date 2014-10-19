module.exports = {
    dedicated: {
        mass: require('./components/dedicated/mass.js'),
        position: require('./components/dedicated/position.js'),
        velocity: require('./components/dedicated/velocity.js'),
        acceleration: require('./components/dedicated/acceleration.js'),
        hitbox: require('./components/dedicated/hitbox.js'),
        appearance: require('./components/dedicated/appearance.js'),
        context2d: require('./components/dedicated/context2d.js')
    },
    shared: {
        gravity: require('./components/shared/gravity.js'),
        time: require('./components/shared/time.js')
    }
};
