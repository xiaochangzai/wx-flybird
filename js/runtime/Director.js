// 导演， 控制游戏的逻辑
import {DataStore} from "../base/DataStore.js";
import {UpPencil} from "./UpPencil.js";
import {DownPencil} from "./DownPencil.js";

export class Director {
    static getInstance () {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor () {
        this.dataStore = DataStore.getInstance();
    }

    createPencil () {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }

    run () {
        this.dataStore.get('background').draw();
        const pencils = this.dataStore.get('pencils');
       if (pencils.length > 0) {
           if ((pencils[0].x + pencils[0].width) <= 0 && pencils.length === 4) {
               pencils.shift();
               pencils.shift();
           }

           if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
               this.createPencil();
           }
       }
        this.dataStore.get('pencils').forEach((value, index) => {
            value.draw();
        });
        this.dataStore.get('land').draw();
        requestAnimationFrame(() => this.run())
    }
}