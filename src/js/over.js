import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class NoGame extends Actor {

    constructor(){
        super({
            width: Resources.GameOver.width,
            height: Resources.GameOver.height
        })
    }

    onInitialize(){
        this.pos = new Vector (400, 260);
        this.scale = new Vector (0.7, 0.7);

        this.graphics.add(Resources.GameOver.toSprite());
    }
}