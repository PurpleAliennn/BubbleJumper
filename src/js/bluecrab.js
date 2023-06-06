import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

import { Bubbles } from "./bubbles.js";
import { Bottom } from "./bottomborder.js";
import { Platform } from "./platform.js";

export class BlueCrab extends Actor {

    damage
    health = 200;

    constructor(){
        super({
            width: Resources.BlueCrab.width,
            height: Resources.BlueCrab.height
        })
    }

    onInitialize(){

        this.body.useGravity = true;

        this.body.collisionType = CollisionType.Active;

        this.graphics.add(Resources.BlueCrab.toSprite());
        this.scale = new Vector (0.4,0.4);

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-80, 0, 50)

            ctx.moveBy(80, 0, 50)

        })

        this.on('collisionstart', (event) => { this.hit(event)} );
    }

    hit(event) {
        if(event.other instanceof Bubbles){
            console.log("Ouch!");
            event.other.takeDamage(50);
            //remove half heart health from Bubbles`
        }
    }

    getHit(amount){

        this.health -= amount;

        if(this.health < 1 ){
           this.kill();
        }

    }
}