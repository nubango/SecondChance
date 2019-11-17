import Fruit from "../objects/fruit.js"

var colour = 60;
var timerText;
var timedEvent;

export default class Zen extends Phaser.Scene {
    constructor() {
        super({ key: "ZEN" });
    }

    create() {
        // Centro x, y : Size w, h
        let width = this.sys.game.config.width;
        let heigth = this.sys.game.config.height;

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

        // 
        timerText = this.add.text(width * 0.5, heigth * 0.1, "", { font: "72px adventpro", fill: "#222222" });
        //timedEvent = this.time.addEvent({ delay: 500, callback: goMenu, callbackScope: this, loop: false });
    }

    update(time, delta) {
        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }
        // Actualiza el timer
        //timerText.setText(timedEvent.getProgress().toString());
    }

    goMenu() {
        this.scene.start("MENU");
    }
}