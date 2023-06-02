import { Actor, Vector, Color, Random, CollisionType } from 'excalibur'
import { Resources } from './resources.js'

import { RedCrab } from './redcrab.js';
import { Left } from './leftborder.js';
import { Right } from './rightborder.js';
import { Platform } from './platform.js';
import { Cloud } from './cloud.js';

export class BubBullets extends Actor {

    constructor(x, y) {

        super({ 
            x: x + Math.random() * 50, 
            y: y + Math.random() * 50 
        })

        this.rand = new Random();

    }

    onInitialize(engine) {

        this.body.collisionType = CollisionType.Fixed;

        let sprArray = [

            Resources.PinkBub.toSprite(),
            Resources.PurpleBub.toSprite(),
            Resources.BlueBub.toSprite()

        ];

        this.graphics.use(this.rand.pickOne(sprArray));

        const sc = Math.random() * 0.1 + 0.1;

        this.scale = new Vector(sc, sc);
        this.rotation = Math.random() * 2;
        this.vel = new Vector(200 , 0);

        this.on("collisionstart", (event) => this.bulletPop(event));

    }

    bulletPop(event){
        if(event.other instanceof Left){
            this.kill();
        } 

        if(event.other instanceof Platform){
            this.kill();
        } 

        if(event.other instanceof Cloud){
            this.kill();
        } 
    }

    bulletDamage(event){
        if(event.other instanceof RedCrab){

        }
    }
    
}