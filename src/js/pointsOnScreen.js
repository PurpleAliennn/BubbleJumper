import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement, GraphicsGroup, Text, Sprite } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {

    scoreText
    group

    constructor() {
        super({ x: 10, y: 10 })
    }

    onInitialize(engine) {

        this.levelText = new Text({
            text: 'Level 1',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 30,
            }),
        })

        this.pointsText = new Text({
            text: 'points:',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 20,
            }),
        })

        const sprite = Resources.TempHeart.toSprite() 
        sprite.scale = new Vector(0.1, 0.1)
        this.graphics.add(sprite)
        
        this.graphics.add(this.pointsText)
        this.group = new GraphicsGroup({
            members: [
                {
                    graphic: this.levelText,
                    pos: new Vector(10, 20),
                },
                {
                    graphic: this.pointsText,
                    pos: new Vector(10, 40),
                },
                {
                    graphic: Resources.TempHeart.toSprite(),
                    pos: new Vector(10, 50),
                    scale: new Vector(0.1,0.1)
                },
                {
                    graphic: Resources.TempHeart.toSprite(),
                    pos: new Vector(62, 50),
                    scale: new Vector(0.1,0.1)
                },
                {
                    graphic: Resources.TempHeart.toSprite(),
                    pos: new Vector(114, 50),
                    scale: new Vector(0.1,0.1)
                },
                {
                    graphic: Resources.TempHeart.toSprite(),
                    pos: new Vector(166, 50),
                    scale: new Vector(0.1,0.1)
                }
            ],
        })
        this.graphics.use(this.group)
    }

    updatePoints(points) {
        this.pointsText.text = `Points: ${points}`
    }

    updateHealth(hearts){
        console.log(hearts);
        if(hearts === 3){
            this.group.members.pop();
        }
    }

}