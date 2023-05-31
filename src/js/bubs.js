import { Actor, Vector, Color, Random } from 'excalibur'
import { Resources } from './resources.js'


export class Bubs extends Actor {


    constructor(x, y) {

        super({ 
            x: x + Math.random() * 50, 
            y: y + Math.random() * 50 
        })

        this.rand = new Random();

    }

    onInitialize(engine) {

        let sprArray = [

            Resources.PinkBub.toSprite(),
            Resources.PurpleBub.toSprite(),
            Resources.BlueBub.toSprite()

        ];

        this.graphics.use(this.rand.pickOne(sprArray));

        const sc = Math.random() * 0.15 + 0.15;

        this.scale = new Vector(sc, sc);
        this.rotation = Math.random() * 2;
        this.vel = new Vector(0, Math.random() * -60 - 20);

        this.actions.fade(0, 1000).die();

    }

}