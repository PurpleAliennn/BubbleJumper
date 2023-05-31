import { Actor, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Cloud extends Actor {

    constructor(){
        super({
            width: Resources.Cloud.width,
            height: Resources.Cloud.height
        })
    }

    onInitialize() {

        this.graphics.add(Resources.Cloud.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}