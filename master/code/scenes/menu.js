import MenuFruit from "../objects/menuFruit.js"
import MenuButton from "../objects/menuButton.js"

// Variables globales
var colour = 60;

var scoreArcade = 543;
var arcadeScoreText;
var scoreZen = 432;
var zenScoreText;

var keySpace;

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
        var background = this.add.image(0, 0, "mainMenuBG");
        background.setOrigin(0);
        background.setDisplaySize(width, heigth);
        
        // Botones
        this.arcadeButton = new MenuButton(this, width * 0.2, heigth * 0.7, "arcade_button");
        this.zenButton = new MenuButton(this, width * 0.8, heigth * 0.7, "zen_button");
        
        var creditsButton = new MenuButton(this, width -30 , heigth -30, "info_button");
        creditsButton.setScale(0.015);
        creditsButton.on('pointerdown', () => this.startCredits());
        
        // Logo
        var logo = this.add.image(center_width, center_heigth * 0.7, "logo");
        logo.setScale(0.4, 0.4);

        // Scores
        arcadeScoreText = this.add.text(25, 16, '0000', { fontFamily: "adventpro", fontStyle: 'bold' ,fontSize: '50px', fill: '#000' });
        zenScoreText = this.add.text(width - 150, 16, '0000', { fontFamily: "adventpro", fontStyle: 'bold' ,fontSize: '50px', fill: '#000' });
        
        // Input
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
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
        this.platano = new MenuFruit(this, width * 0.1, heigth * 0.3, "platano", 100);
        this.mora = new MenuFruit(this, width * 0.6, heigth * 0.3, "mora", -100);
    }
    
    update(time, delta) {
        var pointer = this.input.activePointer;
        
        // Cambia de color
        colour++;
        if (colour === 180) {
            colour = 60;
        }

        if (pointer.isDown) {
            this.platano.on('pointerover', () => this.platano.corte());
            this.mora.on('pointerover', () => this.mora.corte());
            
            this.arcadeButton.on('pointerover', () => this.arcadeButton.corte("ARCADES"));
            this.zenButton.on('pointerover', () => this.zenButton.corte("ZEN"));
        }

        // DEBUG
        if(keySpace.isDown)
        {
            arcadeScoreText.setText(scoreArcade);
            scoreArcade += 1;  
        }  
        }

    // Salto a escenas
    startArcade() {
        // Empieza la ecena arcade
        this.scene.start("ARCADES");
    }
    startZen() {
        // Empieza la ecena zen
        this.scene.start("ZEN");
    }
    startCredits() {
        // Cambia a la escena de creditos
        this.scene.start("CREDITS");
    }
}