import { Actor, Vector, Color, Random } from 'excalibur'
import { Resources } from './resources.js'

export class BubBullets extends Actor {

    constructor(x, y) {

        super({ 
            x: x + Math.random() * 50, 
            y: y + Math.random() * 50 
        })

        this.rand = new Random();

    }

    onInitialize(engine) {

        this.body.collisionType = CollisionType.Active;

        let sprArray = [

            Resources.PinkBub.toSprite(),
            Resources.PurpleBub.toSprite(),
            Resources.BlueBub.toSprite()

        ];

        this.graphics.use(this.rand.pickOne(sprArray));

        const sc = Math.random() * 0.15 + 0.15;

        this.scale = new Vector(sc, sc);
        this.rotation = Math.random() * 2;
        this.vel = new Vector(100 , 0);

    }
}