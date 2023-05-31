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
    BlueBub: new ImageSource(blue)
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
    Resources.BlueBub
])

export { Resources, ResourceLoader }

