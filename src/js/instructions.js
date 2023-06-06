import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Instruct extends Actor {

    constructor(){
        super({
            width: Resources.Instructions.width,
            height: Resources.Instructions.height
        })
    }

    onInitialize(){
        this.pos = new Vector (180, 500);
        this.scale = new Vector (0.7, 0.7);

        this.graphics.add(Resources.Instructions.toSprite());
    }
}