import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Scene } from "excalibur";
import { BackGround } from "./background";
import { Bottom } from "./bottomborder";
import { Instruct } from "./instructions";
import { StartGame } from "./buttonstart";
import { BubbleJumper } from "./title";


export class Start extends Scene {

    constructor(){
        super({
            width: 800, 
            height: 600 
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);
    
    }

    onInitialize(engine){

        const background = new BackGround();
        this.add(background);

        const sand = new Bottom();
        this.add(sand);

        const start = new StartGame();
        this.add(start);

        const instructions = new Instruct();
        this.add(instructions);

        const title = new BubbleJumper();
        this.add(title);
    }

}