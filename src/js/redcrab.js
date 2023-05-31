import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

import { Bubbles } from "./bubbles.js";
import { Bottom } from "./bottomborder.js";
import { Platform } from "./platform.js";

export class RedCrab extends Actor {

    damage
    health

    constructor(){
        super({
            width: Resources.RedCrab.width,
            height: Resources.RedCrab.height
        })
    }

    onInitialize(){

        this.body.useGravity = true;

        this.body.collisionType = CollisionType.Active;

        this.graphics.add(Resources.RedCrab.toSprite());
        this.scale = new Vector (0.3,0.3);

        this.on('collisionstart', (event) => { this.hit(event)} );
    }

    hit(event) {
        if(event.other instanceof Bubbles){
            console.log("Ouch!");
            //remove half heart health from Bubbles`
        }
    }
}