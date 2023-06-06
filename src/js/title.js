import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class BubbleJumper extends Actor {

    constructor(){
        super({
            width: Resources.Title.width,
            height: Resources.Title.height
        })
    }

    onInitialize(){
        this.pos = new Vector (400, 300);
        this.scale = new Vector (1, 1);

        this.graphics.add(Resources.Title.toSprite());
    }
}