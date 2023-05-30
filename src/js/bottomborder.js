import { Actor, Vector, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Bottom extends Actor {

    constructor(){
        super({
            width: 7000,
            height: 101
        })
    }
    onInitialize(){
        this.pos = new Vector (400,550);

        this.graphics.add(Resources.BorderBottom.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}