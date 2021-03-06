// 资源文件加载器， 确保Canvas在图片资源加载完成后才进行渲染
import {Resources} from './Resources.js'
export class ResourceLoader {
    constructor () {
        this.map = new Map(Resources)
        console.log(this.map)
        for (let [key, value] of this.map) {
            const image = new Image()
            image.src = value
            this.map.set(key, image)
        }
    }

    onLoaded (callback) {
        let loadCount = 0
        for (let value of this.map.values()) {
            value.onload  = () => {
                loadCount ++
                if (loadCount >= this.map.size) {
                    callback(this.map)
                }
            }
        }
    }

    static create () {
        return new ResourceLoader()
    }
}