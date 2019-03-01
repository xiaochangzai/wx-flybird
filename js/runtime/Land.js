// 不断移动的陆地
import {Sprite} from "../base/Sprite.js";
import {Director} from "./Director.js";


export class Land extends Sprite{
    constructor () {
        const image = Sprite.getImage('land')
        super(image, 0, 0, image.width, image.height, 0, window.innerHeight - image.height, image.width, image.height)
        // 地板水平变化坐标
        this.landX = image.width > window.innerWidth ? window.innerWidth - image.width : 0;
        this.landSpeed = 2;
        Director.getInstance().landSpeed = this.landSpeed;
    }

    draw () {
        const image = Sprite.getImage('land')
        this.landX = this.landX + this.landSpeed;
        if (this.landX > 0) {
            this.landX = image.width > window.innerWidth ? window.innerWidth - image.width : 0;
        }
        super.draw(this.img, this.srcX, this.srcY, this.srcW, this.srcH, this.landX, this.y, this.width, this.height)
    }
}