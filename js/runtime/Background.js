// 背景
import {Sprite} from "../base/Sprite.js";

export class Background extends Sprite{
    constructor () {
        const image = Sprite.getImage('background');
        super(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height)
    }
}