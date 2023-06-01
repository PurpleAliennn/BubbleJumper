import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Scene } from "excalibur";
import { NoGame } from "./over";
import { NewGame } from "./startover";
import { BackGround } from "./background";
import { Bottom } from "./bottomborder";


export class GameOver extends Scene {

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

        const over = new NoGame();
        this.add(over);

        const startagain = new NewGame();
        this.add(startagain);
    }

}