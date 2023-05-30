import { Actor, Vector, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Right extends Actor {

    constructor() {
        super({
            height: Resources.BorderRight.height,
            width: Resources.BorderRight.width
        })
    }

    onInitialize() {
        this.pos = new Vector(846,300);

        this.graphics.add(Resources.BorderRight.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}