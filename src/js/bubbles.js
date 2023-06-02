import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Bottom } from "./bottomborder.js";
import { Platform } from "./platform.js";
import { Cloud } from "./cloud.js";
import { GameOver } from "./gameover.js";
import { BubBullets } from "./bubbullet.js";

export class Bubbles extends Actor {

    health = 100;
    damage
    grounded
    timer


    constructor(){

        const circle = Shape.Circle(70);

        super({
            height: 100,
            width: 100,
            collider: circle
        });

        this.timer = new Timer({
            fcn: () => this.graphics.use('HappyBubbles'),
            repeats: false,
            interval: 1000,
        })
    }

    onActivate(ctx) {

        this.bubbles.pos = new Vector(10, 500);
        this.bubbles.reset();
    }

    onInitialize(engine){

        this.game = engine

        this.body.useGravity = true;

        this.body.collisionType = CollisionType.Active;

        this.graphics.add('HappyBubbles',Resources.Bubbles.toSprite());
        this.graphics.add('MadBubbles',Resources.MadBubbles.toSprite());
        this.graphics.add('SadBubbles',Resources.SadBubbles.toSprite());
        this.scale = new Vector (0.4,0.4);

        this.graphics.use('HappyBubbles');

        this.on('collisionstart', (event) => { this.isGrounded(event)} );

        this.game.currentScene.add(this.timer);
    }

    reset(){

        this.graphics.use('HappyBubbles');
        this.health = 100;
        
    }

    isGrounded(event){

        if(event.other instanceof Bottom){
            console.log("you're on the floor");
            this.grounded = true;
        } 

        if(event.other instanceof Platform){
            console.log("you're on a platform");
            this.grounded = true;
        } 

        if(event.other instanceof Cloud){
            console.log("you're on a cloud");
            this.grounded = true;
        } 
    }

    onPreUpdate(engine, delta) {

        let xspeed = 0;
        let yspeed = 0;


        if(engine.input.keyboard.isHeld(Input.Keys.D)) {
           xspeed = 230;
        }

        if(engine.input.keyboard.isHeld(Input.Keys.A)) {
            xspeed = -230;
        }

        console.log(this.grounded)
        
        if(this.grounded) {
            if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
                yspeed = -30;
                this.grounded = false;
            }
        
            if(engine.input.keyboard.wasPressed(Input.Keys.B)) {
                yspeed = -40;
                this.grounded = false;
                this.game.currentScene.bubbleJump(this.pos.x, this.pos.y);
 
            }
        }

        if(engine.input.keyboard.wasPressed(Input.Keys.L)) {
            this.attack();
            this.graphics.use('MadBubbles');
            this.timer.start();
        }

        this.vel = this.vel.add(new Vector(xspeed * delta, yspeed*delta));
        this.vel = new Vector(xspeed, this.vel.y);

        engine.currentScene.camera.y = this.pos.y - 175;

    }

    takeDamage(amount){

        console.log("I take damage " + amount);
        this.health -= amount;

        this.graphics.use('SadBubbles');
        this.timer.start();

        if(this.health < 1 ){
            this.game.goToScene('gameOver', new GameOver());
        }
    }

    attack(){

        const bubBullet = new BubBullets();
        bubBullet.pos = this.pos.clone();
        this.scene.add(bubBullet);
    }

}