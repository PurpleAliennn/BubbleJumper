import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Platform extends Actor {

    constructor(){
        super({
            width: Resources.Platform.width,
            height: Resources.Platform.height
        })
    }

    onInitialize() {

        this.graphics.add(Resources.Platform.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}