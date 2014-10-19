var game = {};
game.ecs = require('simplecs');

setupGame(game);
initGame(game);

function initGame(game) {
    gameLoop();
}


function setupGame(game) {
    game.canvas = document.getElementById('game');
    initCanvas(game.canvas);
    initGameComponents(game);
    initECSSystems(game);
    initGameSystems(game);
    initGameEntities(game);
    initECSComponents(game);
}


function gameLoop() {
    requestAnimationFrame(gameLoop);

    for (var i = 0, l = game.systems.length; i < l; i++) {
        game.systems[i](game.entities);
    }
}

function initGameComponents(game) {
    game.components = require('./components.js');
    game.ecs.components.dedicated = game.components.dedicated;
    game.ecs.components.shared = game.components.shared;
}


function initGameSystems(game) {
    game.systems = [
        game.ecs.systems.physics,
        game.ecs.systems.render
    ];
}


function initGameEntities(game) {
    game.entities = {};

    var dedicated = game.ecs.components.dedicated;
    var shared = game.ecs.components.shared;
    var context2d = game.canvas.getContext('2d');

    // init ground
    var ground = game.ecs.entity();
    var groundWidth = context2d.canvas.width;
    var groundHeight = 20;
    ground.add(dedicated.context2d({ value: context2d }));
    ground.add(dedicated.position({ x: 0, y: context2d.canvas.height - groundHeight }));
    ground.add(dedicated.appearance({ width: groundWidth, height: groundHeight,
        color: {
            r: 0, g: 255, b: 0, a: 1
        }
    }));
    ground.add(dedicated.hitbox({ width: groundWidth, height: groundHeight }));

    game.entities[ground.id] = ground;

    // init shit
    for (var i = 0; i < 150; i++) {
        var entity = game.ecs.entity();
        var width = Math.max(1, 250 / i);
        var height = Math.max(2, 50 / i);

        entity.add(dedicated.context2d({ value: context2d }));
        entity.add(dedicated.position({ x: width, y: 0 }));
        entity.add(dedicated.appearance({
            color: { r: (Math.random() * 127) | 0 + 128, g: 10, b: 10, a: 1 },
            width: width,
            height: height
        }));
        entity.add(dedicated.hitbox({ width: width, height: height }));
        entity.add(shared.gravity);
        entity.add(dedicated.velocity());
        entity.add(dedicated.acceleration());
        entity.add(dedicated.mass({ value: entity.components.appearance.width * entity.components.appearance.height }));

        game.entities[entity.id] = entity;
    }
}


function initECSComponents(game) {
    game.ecs.components.shared = game.components.shared;
    game.ecs.components.dedicated = game.components.dedicated;
}


function initECSSystems(game) {
    game.ecs.systems = require('./systems.js');
}

function initCanvas(canvas) {
    canvas.width = 500;
    canvas.height = 500;
}
