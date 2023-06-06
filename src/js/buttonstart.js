import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';
import { Level1 } from "./level1.js";

export class StartGame extends Actor {

    constructor(){
        super({
            width: Resources.StartButton.width,
            height: Resources.StartButton.height
        })
    }

    onInitialize(engine){

        this.pos = new Vector (395, 90);
        this.scale = new Vector (1, 1);

        this.graphics.add(Resources.StartButton.toSprite());

        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        
        this.on("pointerup", (event) =>  engine.goToScene('level1'))
        
    }

}