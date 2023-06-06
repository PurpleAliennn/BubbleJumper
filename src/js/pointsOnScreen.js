import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {

    onInitialize(engine){
        this.pos = new Vector(0,10)
        this.label = new Label({
            text: `points:`,
            pos: new Vector(0, 0),
            color: Color.Black,
            font: new Font({
                family: 'Arial',
                size: 48,
                unit: FontUnit.Px
            })
        });

        this.addChild(this.label);

        // this.graphics.add(Resources.TempHeart.toSprite());
        // this.scale = new Vector(0.1,0.1);

    }
}