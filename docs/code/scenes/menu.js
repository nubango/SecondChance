import Fruit from "../objects/fruit.js"

// Variables globales
var colour = 60;

export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "MENU" });
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
        
        // Logo
        var logo = this.add.image(center_width, center_heigth * 0.7, "logo");
        logo.setScale(0.4, 0.4);
        
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
        
        // Frutas saltando
        var platano = new Fruit(this, width * 0.1, heigth * 0.3, "platano", 100);
        var limon = new Fruit(this, center_width, center_heigth, "ciruela", -100);
        
        // Boton de arcade
        const arcadeButton = this.add.text(width * 0.2, heigth * 0.7, "Arcade", { font: "96px adventpro", fill: "#222222" });
        arcadeButton.setInteractive();
        arcadeButton.on('pointerover', () => arcadeButton.setStyle({ fill: '#000000'}));
        arcadeButton.on('pointerout', () => arcadeButton.setStyle({ fill: '#222222'}));
        arcadeButton.on('pointerdown', () => this.startArcade());
        
        // Boton de zen
        const zenButton = this.add.text(width * 0.6, heigth * 0.7, "Zen", { font: "96px adventpro", fill: "#222222" });
        zenButton.setInteractive();
        zenButton.on('pointerover', () => zenButton.setStyle({ fill: '#000000'}));
        zenButton.on('pointerout', () => zenButton.setStyle({ fill: '#222222'}));
        zenButton.on('pointerdown', () => this.startZen());
        
    }
    
    update(time, delta) {
        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }
    }

 

    startArcade() {
        // Empieza la ecena arcade
        this.scene.start("ARCADES");
    }
    startZen() {
        // Empieza la ecena zen
        this.scene.start("ZEN");
    }
}