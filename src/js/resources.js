import { ImageSource, Loader } from 'excalibur'
import bubblesImage from '../images/bubbles.png'
import bottomBorder from '../images/bottomborder.png'
import leftBorder from  '../images/leftborder.png'
import rightBorder from '../images/rightborder.png'
import platform from '../images/platform.png'
import redCrab from '../images/redcrab.png'
import blueCrab from '../images/bluecrab.png'
import background from '../images/background.png'
import cloud from '../images/cloud.png'
import pink from '../images/pinkbubble.png'
import purple from '../images/purplebubble.png'
import blue from '../images/bluebubble.png'
import gameover from '../images/game_over.png'
import startover from '../images/start_over.png'
import madBubbles from '../images/madBubbles.png'
import sadBubbles from '../images/sadBubbles.png'
import tempHeart from '../images/heartTemporary.png'
import bubheart from '../images/bubbleHeart.png'
import title from '../images/startTitle.png'
import instructions from '../images/instructions.png'
import startButton from '../images/startS.png'

const Resources = {
    Bubbles: new ImageSource(bubblesImage),
    BorderBottom: new ImageSource(bottomBorder),
    BorderLeft: new ImageSource(leftBorder),
    BorderRight: new ImageSource(rightBorder),
    Platform: new ImageSource(platform),
    RedCrab: new ImageSource(redCrab),
    BlueCrab: new ImageSource(blueCrab),
    Background: new ImageSource(background),
    Cloud: new ImageSource(cloud),
    PinkBub: new ImageSource(pink),
    PurpleBub: new ImageSource(purple),
    BlueBub: new ImageSource(blue),
    GameOver: new ImageSource(gameover),
    StartOver: new ImageSource(startover),
    MadBubbles: new ImageSource(madBubbles),
    SadBubbles: new ImageSource(sadBubbles),
    TempHeart: new ImageSource(tempHeart),
    BubHeart: new ImageSource(bubheart),
    Title: new ImageSource(title),
    Instructions: new ImageSource(instructions),
    StartButton: new ImageSource(startButton)
}
const ResourceLoader = new Loader([
    Resources.Bubbles, 
    Resources.BorderBottom, 
    Resources.BorderLeft, 
    Resources.BorderRight, 
    Resources.Platform, 
    Resources.RedCrab, 
    Resources.BlueCrab, 
    Resources.Background, 
    Resources.Cloud,
    Resources.PinkBub,
    Resources.PurpleBub,
    Resources.BlueBub,
    Resources.GameOver,
    Resources.StartOver,
    Resources.MadBubbles,
    Resources.SadBubbles,
    Resources.TempHeart,
    Resources.BubHeart,
    Resources.Title,
    Resources.Instructions,
    Resources.StartButton
])

export { Resources, ResourceLoader }

