module.exports = function physics(entities) {
    for (var id in entities) {
        var entity = entities[id];
        var mass = entity.components.mass;
        var position = entity.components.position;
        var acceleration = entity.components.acceleration;
        var velocity = entity.components.velocity;
        var appearance = entity.components.appearance;
        var gravity = entity.components.gravity;
        var hitbox = entity.components.hitbox;

        if (mass && acceleration && gravity) {
            acceleration.y += gravity.value * mass.value;
        }

        if (velocity && acceleration) {
            velocity.x += acceleration.x;
            velocity.y += acceleration.y;
        }

        if (position && velocity) {
            position.x += velocity.x;
            position.y += velocity.y;
        }

        if (hitbox && hitbox.on && position && velocity && appearance) {
            for (var otherId in entities) {
                if (otherId !== id) {
                    var other = entities[otherId];
                    var otherHitbox = other.components.hitbox; 
                    var otherPosition = other.components.position; 
                    var otherVelocity = other.components.velocity; 
                    var otherAppearance = other.components.appearance; 

                    if (otherHitbox && otherHitbox.on && otherPosition) {
                        if (position.y + hitbox.height >= otherPosition.y &&
                            position.x + hitbox.width <= otherPosition.x + otherHitbox.width &&
                            position.x + hitbox.width >= otherPosition.x) {

                            position.y = otherPosition.y - hitbox.height;
                            velocity.y *= -0.45;
                        }
                    }
                }
            }
        }
    }
};
