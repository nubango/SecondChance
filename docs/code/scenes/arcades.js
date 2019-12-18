import MenuFruit from "../objects/menuFruit.js"

var colour = 60;

export default class Arcades extends Phaser.Scene {
    constructor() {
        super({ key: "ARCADES", active: false });
    }

    create() {
        // Centro x, y : Size w, h
        let width = this.sys.game.config.width;
        let heigth = this.sys.game.config.height;
        let center_width = this.sys.game.config.width / 2;
        let center_heigth = this.sys.game.config.height / 2;

        // Background con forma de cuaderno
        var background = this.add.image(0, 0, "background");
        background.setOrigin(0);
        background.setDisplaySize(width, heigth);

        // Tinta
        var renderTex = this.add.renderTexture(0, 0, width, heigth);
        var boli = this.textures.getFrame('tinta');
        var hsv = Phaser.Display.Color.HSVColorWheel();
        this.input.on('pointermove', function (pointer) {
            if (pointer.isDown) {
                var points = pointer.getInterpolatedPosition(30);
                points.forEach(function (p) {
                    renderTex.draw(boli, p.x, p.y, 1, hsv[colour].color);
                });
                
            }
        }, this);

        // Frutas
        var frutilla = new MenuFruit(this, 123, 231, "moraA");
    }

    update(time, delta) {
        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }
    }
}