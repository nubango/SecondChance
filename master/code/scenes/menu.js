import Fruit from "../objects/fruit.js"
export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "MENU" });
    }

    create() {
        // Centro x, y
        let center_width = this.sys.game.config.width / 2;
        let center_heigth = this.sys.game.config.height / 2;

        // Background con forma de cuaderno
        var background = this.add.image(0, 0, "background");
        background.setOrigin(0);
        background.setDisplaySize(1000, 500)
        
        // Logo
        var logo = this.add.image(center_width, center_heigth - 100, "logo");
        logo.setScale(0.4, 0.4);

        // Frutas saltando
        var platano = new Fruit(this, 100, 100, "platano");
        var lomon = new Fruit(this, center_width, center_heigth, "limon");
    }

    update(time, delta) {

    }
}

/* 
let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300, 1);
        graphics.fillRect(100, 200, 600, 200);
        graphics.fillRect(100, 100, 100, 100);
        this.add.text(120, 110, "A", { font: "96px adventpro", fill: "#000000" });
*/