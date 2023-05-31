import { Actor, Vector, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Left extends Actor {

    constructor() {
        super({
            width: Resources.BorderLeft.width,
            height: Resources.BorderLeft.height
        })
    }

    onInitialize(){
        this.pos = new Vector(-12,-1000);

        this.graphics.add(Resources.BorderLeft.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}