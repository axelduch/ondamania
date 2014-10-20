module.exports = function render(entities) {
    var previousContext = null;

    for (var id in entities) {
        var entity = entities[id];
        var appearance = entity.components.appearance;
        var position = entity.components.position;
        var rotation = entity.components.rotation;
        var context2d = entity.components.context2d;

        if (appearance && position && context2d) {


            var context = context2d.value;
            var centerX = position.x + 0.5 * appearance.width;
            var centerY = position.y + 0.5 * appearance.height;

            if (previousContext !== context) {
                context.fillStyle = '#FFFFFF';
                context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                previousContext = context;
            }

            if (rotation) {
                context.save();
                context.translate(centerX, centerY);
                context.rotate(rotation.value);
                context.translate(-centerX, -centerY);
            }

            context.fillStyle = 'rgba(' + [
                appearance.color.r,
                appearance.color.g,
                appearance.color.b,
                appearance.color.a
            ] + ')';

            context.fillRect(position.x, position.y, appearance.width, appearance.height);

            if (rotation && rotation.value) {
                context.restore();
            }
        }
    }
};
