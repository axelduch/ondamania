module.exports = function render(entities) {
    var previousContext = null;

    for (var id in entities) {
        var entity = entities[id];
        var appearance = entity.components.appearance;
        var position = entity.components.position;
        var context2d = entity.components.context2d;

        if (appearance && position && context2d) {

            var context = context2d.value;

            if (previousContext !== context) {
                context.fillStyle = '#FFFFFF';
                context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                previousContext = context;
            }

            context.fillStyle = 'rgba(' + [
                appearance.color.r,
                appearance.color.g,
                appearance.color.b,
                appearance.color.a
            ] + ')';

            context.fillRect(position.x, position.y, appearance.width, appearance.height);
        }
    }
};
