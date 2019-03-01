// 初始化整个游戏精灵，作为游戏开始的入口
import {ResourceLoader} from './base/ResourceLoader.js';
import {Background} from "./runtime/Background.js";
import {DataStore} from "./base/DataStore.js";
import {Director} from "./runtime/Director.js";
import {Land} from "./runtime/Land.js";

export class Main {
    constructor () {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded (map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init () {
        this.director.isGameOver = false;

        this.dataStore
            .put('background', Background)
            .put('land', Land)
            .put('pencils', [])

        this.director.run()
        // 创建铅笔要在逻辑运行之前
        this.director.createPencil();
    }
}