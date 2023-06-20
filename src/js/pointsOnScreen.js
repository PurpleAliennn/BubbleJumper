import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement, GraphicsGroup, Text, Sprite } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {             //dit is de code voor de text over het scherm heen. dit heb ik de UI genoemd
                                                    //ik maak elementen aan die ik dan samen met de sprites voor de hearts samen
    scoreText                                       //in een graphics group zet
    group

    constructor() {
        super({ x: 10, y: 10 })                     //breedte en hoogte van de screenelement
    }

    onInitialize(engine) {

        this.levelText = new Text({                 //het eerste stukje tekst voor het aangeven van het level
            text: 'Level 1',                        //dit is basically een label maar dan iets anders weergegeven
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 30,
            }),
        })

        this.pointsText = new Text({               //dit is het stukje tekst voor het aangeven van de punten
            text: 'points:',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 20,
            }),
        })
        
        this.graphics.add(this.pointsText)
        this.group = new GraphicsGroup({                          //deze hele functie is voor het toevoegen van hartjes aan je game
            members: [                                            //dit is een graphics group waar in meerdere sprites van het hartje in staan
                {                                                 //samen met de stukjes tekst van het level en de punten
                    graphic: this.levelText,
                    pos: new Vector(10, 20),
                },
                {                                                 //deze eerste twee members zijn de stukjes tekst
                    graphic: this.pointsText,
                    pos: new Vector(10, 40),
                },
                {
                    graphic: Resources.BubHeart.toSprite(),
                    pos: new Vector(10, 50),
                    scale: new Vector(0.1,0.1)
                },
                {
                    graphic: Resources.BubHeart.toSprite(),
                    pos: new Vector(62, 50),
                    scale: new Vector(0.1,0.1)
                },                                                 //deze laatste vier members zijn de hartjes
                {
                    graphic: Resources.BubHeart.toSprite(),
                    pos: new Vector(114, 50),
                    scale: new Vector(0.1,0.1)
                },
                {
                    graphic: Resources.BubHeart.toSprite(),
                    pos: new Vector(166, 50),
                    scale: new Vector(0.1,0.1)
                }
            ],
        })
        this.graphics.use(this.group)                              //het gebruiken van een graphics group maakt het makkelijker om meerdere 
    }                                                              //van dezelfde sprites toe te voegen en het is makkelijk positioneren 
        
    updatePoints(points) {
        this.pointsText.text = `Points: ${points}`                 //deze funtie houd de punten bij, deze komen via een parameter binnen 
    }                                                              //vanuit de scene

    updateHealth(hearts){
        console.log(hearts);                                       //deze functie haalt hartjes weg gebaseert op de hoeveelheid health
        if(hearts === 3){
            this.group.members.pop();
        }
    }

}