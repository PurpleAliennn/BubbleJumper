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

    onInitialize(engine){

        const background = new BackGround();
        this.add(background);

        const sand = new Bottom();
        this.add(sand);

        const wallLeft = new Left();
        this.add(wallLeft);

        const wallRight = new Right();
        this.add(wallRight);

        const bubbles = new Bubbles();
        this.add(bubbles);
        bubbles.pos = new Vector (10, 500);

        const crabRed = new RedCrab();
        this.add(crabRed);
        crabRed.pos = new Vector (625, 314);

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

        // const cloud = new Cloud();
        // this.add(cloud);
        // cloud.pos = new Vector(530, -150);

        // const cloud2 = new Cloud();
        // this.add(cloud2);
        // cloud2.pos = new Vector(400, -420);

        // const cloud3 = new Cloud();
        // this.add(cloud3);
        // cloud3.pos = new Vector(200, -580);

        // const cloud4 = new Cloud();
        // this.add(cloud4);
        // cloud4.pos = new Vector(610, -755);

        // const cloud5 = new Cloud();
        // this.add(cloud5);
        // cloud5.pos = new Vector(300, -940);

        // const cloud6 = new Cloud();
        // this.add(cloud6);
        // cloud6.pos = new Vector(155, -1230);

        // const cloud7 = new Cloud();
        // this.add(cloud7);
        // cloud7.pos = new Vector(630, -1500);

        // const cloud8 = new Cloud();
        // this.add(cloud8);
        // cloud8.pos = new Vector(360, -1760);
    }
}
