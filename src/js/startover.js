import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level1 } from "./level1.js";

export class NewGame extends Actor {

    constructor(){
        super({
            width: Resources.StartOver.width,
            height: Resources.StartOver.height
        })
    }

    onInitialize(engine){

        this.pos = new Vector (395, 400);
        this.scale = new Vector (0.7, 0.7);

        this.graphics.add(Resources.StartOver.toSprite());

        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        
        this.on("pointerup", (event) =>  engine.goToScene('level1'))
        
    }

}