import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Bottom } from "./bottomborder.js";
import { Platform } from "./platform.js";

export class Bubbles extends Actor {

    lives
    damage
    grounded


    constructor(){

        const circle = Shape.Circle(70);

        super({
            height: 100,
            width: 100,
            collider: circle
        });
    }

    onInitialize(){

        this.body.useGravity = true;

        this.body.collisionType = CollisionType.Active;

        this.graphics.add(Resources.Bubbles.toSprite());
        this.scale = new Vector (0.4,0.4);

        this.on('collisionstart', (event) => { this.isGrounded(event)} );
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
                yspeed = -40
                this.grounded = false;
            }
        }

        this.vel = this.vel.add(new Vector(xspeed * delta, yspeed*delta));
        this.vel = new Vector(xspeed, this.vel.y);

        engine.currentScene.camera.y = this.pos.y - 175;

    }
   
    run(){
        
    }

    attack(){

    }

}