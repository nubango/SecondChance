import Fruit from "../objects/fruit.js"

var colour = 60;
var score = 0;
// Create array of fruits
var fruits = ["platano", "mora", "cerezaB", "coco", "manzanaA", "uvaA",
    "limon", "lima", "naranja", "malocoton", "pera", "ciruela", "frambuesa",
    "manzanaB", "cerezaA", "uvaB", "fresa", "sandia"];

export default class Zen extends Phaser.Scene {
    constructor() {
        super({ key: "ZEN" });
    }

    create() {
        // Centro x, y : Size w, h
        let width = this.sys.game.config.width;
        let height = this.sys.game.config.height;
        
        
        // Background con forma de cuaderno
        var background = this.add.image(0, 0, "background");
        background.setOrigin(0);
        background.setDisplaySize(width, height);
        
        // Tinta
        var renderTex = this.add.renderTexture(0, 0, width, height);
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
        
        // Timer
        this.timerText = this.add.text(width * 0.6, height * 0.1, "", { font: "72px adventpro", fill: "#222222" });
        this.tim = this.time.delayedCall(10000, () => goMenu(this), [], this);
        // Points
        this.pointsText = this.add.text(width * 0.1, height * 0.1, "", { font: "72px adventpro", fill: "#222222" });

        
        // Declarar fruit
        this.fruit = [];
    }
        
    update(time, delta) {
        var pointer = this.input.activePointer;
        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }
        
        // Spawner de frutas
        var random = Phaser.Math.Between(0, 50);

        if (random == 0) {
            var randomFruit = Phaser.Math.Between(0, 18);
            var randomX = Phaser.Math.Between(0, this.sys.game.config.width);
            this.fruit.push(new Fruit(this, randomX, this.sys.game.config.height, fruits[randomFruit]));
        }

        for (var i = 0; i < this.fruit.length; ++i) {
            if (pointer.isDown) {
                var wid = this.fruit[i].width;
                var hei = this.fruit[i].height;
                var posX = this.fruit[i].x - wid / 2;
                var posY = this.fruit[i].y - hei / 2;

                if (posX < pointer.x && posX + wid > pointer.x && posY < pointer.y && posY + hei > pointer.y) {
                    this.fruit[i].corte();
                    this.fruit.splice(i, 1);
                    // Actualiza los puntoss
                    score += 2;
                }
            }

            if (this.fruit[i] != null && this.fruit[i].y > 800) {
                this.fruit.splice(i, 1);
                // Actualiza los puntos
                if (score > 0) {
                score--;
                }
            }
        }
        
        // Actualiza el timer y points
        this.timerText.setText("Time: " + this.tim.getElapsedSeconds().toString().substr(0, 4));
        this.pointsText.setText("Score: " + score);
    }
}

function goMenu(zen) {
    if (localStorage.getItem('highscoreZen') === null) {
        localStorage.setItem('highscoreZen', score);
    }
    else if(score > localStorage.getItem('highscoreZen')) {
        localStorage.setItem('highscoreZen', score);
    }

    zen.scene.start("MENU");
}