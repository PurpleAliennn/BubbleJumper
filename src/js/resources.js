import { ImageSource, Loader } from 'excalibur'
import bubblesImage from '../images/bubbles.png'
import bottomBorder from '../images/bottomborder.png'
import leftBorder from  '../images/leftborder.png'
import rightBorder from '../images/rightborder.png'
import platform from '../images/platform.png'
import redCrab from '../images/redcrab.png'
import blueCrab from '../images/bluecrab.png'

const Resources = {
    Bubbles: new ImageSource(bubblesImage),
    BorderBottom: new ImageSource(bottomBorder),
    BorderLeft: new ImageSource(leftBorder),
    BorderRight: new ImageSource(rightBorder),
    Platform: new ImageSource(platform),
    RedCrab: new ImageSource(redCrab),
    BlueCrab: new ImageSource(blueCrab)
}
const ResourceLoader = new Loader([Resources.Bubbles, Resources.BorderBottom, Resources.BorderLeft, Resources.BorderRight, Resources.Platform, Resources.RedCrab, Resources.BlueCrab])

export { Resources, ResourceLoader }
