import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class BackGround extends Actor {

    constructor(){
        super({
            width: Resources.Background.width,
            height: Resources.Background.height
        })
    }

    onInitialize(){
        this.pos = new Vector (400, -900);

        this.graphics.add(Resources.Background.toSprite());
    }
}