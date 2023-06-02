import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Scene } from "excalibur";
//import { Resources, ResourceLoader } from './resources.js';

import { Bubbles } from './bubbles.js';
import { RedCrab } from './redcrab.js';
import { Bottom } from './bottomborder.js';
import { Left } from './leftborder.js';
import { Right } from './rightborder.js';
import { Platform } from './platform.js';
import { BackGround } from "./background.js";
import { Cloud } from "./cloud.js";
import { Bubs } from "./bubs.js";

export class Level1 extends Scene {

    crabRed
    bubbles

    constructor(){
        super({
            width: 800, 
            height: 600 
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);
    
    }

    bubbleJump(x,y) {

        for(let i = 5; i < 15; i ++){

            this.add(new Bubs(x, y))

        }
    }

    onActivate(ctx){

        this.bubbles.pos = new Vector(10, 500);

        this.crabRed.pos = new Vector(625, 314);

        this.bubbles.reset()

    }

    onInitialize(engine){

        const background = new BackGround();
        this.add(background);

        const sand = new Bottom();
        this.add(sand);

        const wallLeft = new Left();
        this.add(wallLeft);

        const wallRight = new Right();
        this.add(wallRight);

        this.bubbles = new Bubbles();
        this.add(this.bubbles);
        this.bubbles.pos = new Vector (10, 500);

        this.crabRed = new RedCrab();
        this.add(this.crabRed);
        this.crabRed.pos = new Vector (625, 314);

        const platform = new Platform();
        this.add(platform);
        platform.pos = new Vector(220, 390);

        const platform2 = new Platform();
        this.add(platform2);
        platform2.pos = new Vector(570, 320);

        const platform3 = new Platform();
        this.add(platform3);
        platform3.pos = new Vector(420, 110);

        const platform4 = new Platform();
        this.add(platform4);
        platform4.pos = new Vector(130, -30);

        const cloudPositions = [
            new Vector(530, -150),
            new Vector(400, -420),
            new Vector(200, -580),
            new Vector(610, -755),
            new Vector(300, -940),
            new Vector(155, -1230),
            new Vector(630, -1500),
            new Vector(360, -1760)
          ]
          
          for (let p of cloudPositions) {
            const cloud = new Cloud();
            cloud.pos = p;
            this.add(cloud);
          }
    }
}
