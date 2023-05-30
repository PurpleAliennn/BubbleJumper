import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Scene, Axis, Camera } from "excalibur";
//import { Resources, ResourceLoader } from './resources.js';

import { Bubbles } from './bubbles.js';
import { RedCrab } from './redcrab.js';
import { Bottom } from './bottomborder.js';
import { Left } from './leftborder.js';
import { Right } from './rightborder.js';
import { Platform } from './platform.js';

export class Level1 extends Scene {

    constructor(){
        super({
            width: 800, 
            height: 600 
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);
    
    }

    onInitialize(engine){

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
        crabRed.pos = new Vector (625, 316);

        const platform = new Platform();
        this.add(platform);
        platform.pos = new Vector(220, 390);

        const platform2 = new Platform();
        this.add(platform2);
        platform2.pos = new Vector(570, 320);
    }
}
