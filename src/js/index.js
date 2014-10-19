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
        game.ecs.systems.render
    ];
}


function initGameEntities(game) {
    game.entities = {};

    var dedicated = game.ecs.components.dedicated;
    var shared = game.ecs.components.shared;
    var context2d = game.canvas.getContext('2d');

    for (var i = 0; i < 100; i++) {
        var entity = game.ecs.entity();
        entity.add(dedicated.context2d({ value: context2d }));
        entity.add(dedicated.position({ x: i * 4, y: i * 3 }));
        entity.add(dedicated.appearance({
            color: { r: (Math.random() * 127) | 0 + 128, g: 10, b: 10, a: 1 },
            width: i,
            height: 5 + Math.random() * i - i * 0.5
        }));

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
    canvas.width = 800;
    canvas.height = 600;
}
