import { Actor, Vector, Color, Random, CollisionType, Shape } from 'excalibur'
import { Resources } from './resources.js'

import { RedCrab } from './redcrab.js';
import { Left } from './leftborder.js';
import { Right } from './rightborder.js';
import { Platform } from './platform.js';
import { Cloud } from './cloud.js';
import { BlueCrab } from './bluecrab.js';

export class BubBullets extends Actor {

    constructor(x, y) { 

        const circle = Shape.Circle(90);

        super({ 
            x: x + Math.random() * 50, 
            y: y + Math.random() * 50,
            collider: circle
        })

        this.rand = new Random();

    }

    onInitialize(engine) {

        this.game = engine;

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

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

        if(event.other instanceof Right){
            this.kill();
        } 

        if(event.other instanceof Platform){
            this.kill();
        } 

        if(event.other instanceof Cloud){
            this.kill();
        } 

        if(event.other instanceof RedCrab){
            event.other.getHit(50);
            this.kill();
            this.game.currentScene.points(5);
        }

        if(event.other instanceof BlueCrab){
            event.other.getHit(50);
            this.kill();
            this.game.currentScene.points(10);
        }
    }
    
}