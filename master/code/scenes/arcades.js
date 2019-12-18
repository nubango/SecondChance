import Fruit from "../objects/fruit.js"

var colour = 60;
// Create array of fruits
var fruits = ["platano", "mora", "cerezaB", "coco", "manzanaA", "uvaA",
    "limon", "lima", "naranja", "malocoton", "pera", "ciruela", "frambuesa",
    "manzanaB", "cerezaA", "uvaB", "fresa", "sandia"];
var score = 0;

export default class Arcades extends Phaser.Scene {
    constructor() {
        super({ key: "ARCADES", active: false });
    }

    create() {
        // Numero de vidas
        this.vidas = 3;

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

        // Points
        this.pointsText = this.add.text(width * 0.4, height * 0.05, "", { font: "56px adventpro", fill: "#222222" });
        this.livesText = this.add.text(width * 0.4, height * 0.15, " x x x", { font: "72px adventpro", fill: "#222222" });
        // Frutas
        this.fruit = [];
        this.bombs = [];
    }

    update(time, delta) {
        var pointer = this.input.activePointer;

        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }

        // Spawner de frutas
        var randomF = Phaser.Math.Between(0, 50);
        var randomB = Phaser.Math.Between(0, 100);

        if (randomF == 0) {
            var randomX = Phaser.Math.Between(0, this.sys.game.config.width);
            var randomFruit = Phaser.Math.Between(0, 17);
            this.fruit.push(new Fruit(this, randomX, this.sys.game.config.height, fruits[randomFruit]));
        }
        if (randomB == 0) {
            var randomX = Phaser.Math.Between(0, this.sys.game.config.width);
            this.fruit.push(new Fruit(this, randomX, this.sys.game.config.height, "bomba"));
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

            if (this.fruit[i] != null && this.fruit[i].y > this.sys.game.config.height + 100) {
                this.fruit.splice(i, 1);
                // Actualiza los puntos
                if (this.vidas > -1) {
                    this.vidas--;
                }
            }
        }

        for (var i = 0; i < this.bombs.length; ++i) {
            if (pointer.isDown) {
                var wid = this.bombs[i].width;
                var hei = this.bombs[i].height;
                var posX = this.bombs[i].x - wid / 2;
                var posY = this.bombs[i].y - hei / 2;

                if (posX < pointer.x && posX + wid > pointer.x && posY < pointer.y && posY + hei > pointer.y) {
                    this.bombs[i].corte();
                    this.bombs.splice(i, 1);
                    // Actualiza los puntoss
                    this.vidas--;
                }
            }
        }

        // Actualiza el texto de vidas
        if (this.vidas == 2) {
            this.livesText = this.add.text(this.sys.game.config.width * 0.4, this.sys.game.config.height * 0.15, " x ", { font: "74px adventpro", fill: "#DC143C" });
        }
        else if (this.vidas == 1) {
            this.livesText = this.add.text(this.sys.game.config.width * 0.4, this.sys.game.config.height * 0.15, " x x", { font: "74px adventpro", fill: "#DC143C" });
        }
        else if (this.vidas == 0) {
            this.livesText = this.add.text(this.sys.game.config.width * 0.4, this.sys.game.config.height * 0.15, " x x x", { font: "74px adventpro", fill: "#DC143C" });
        }
        // Actualiza el texto de puntos
        this.pointsText.setText("Score: " + score);

        
        if (this.vidas <= -1) {
            goMenu(this);
        }
    }
}

function goMenu(arcades) {
    if (localStorage.getItem('highscoreArcade') === null) {
        localStorage.setItem('highscoreArcade', score);
    }
    else if(score > localStorage.getItem('highscoreArcade')) {
        localStorage.setItem('highscoreArcade', score);
    }

    arcades.scene.start("MENU");
}