import '../css/style.css';
import { Actor, Engine, Vector, Label, FontUnit, Font, Physics, Scene} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

import { Start } from './start';
import { Level1 } from './level1.js';
import { GameOver } from './gameover.js';


export class Game extends Engine {

    constructor() {
        super({ 
            width: 800, 
            height: 600 
        });

        this.start(ResourceLoader).then(() => this.startGame());
        
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);
    }

    startGame() {

        this.addScene('startGame', new Start());
        this.addScene('level1', new Level1());
        this.addScene('gameOver', new GameOver());

        this.goToScene('startGame');

    }
}

new Game();
