import MenuFruit from "../objects/menuFruit.js"
import MenuButton from "../objects/menuButton.js"

// Variables globales
var colour = 60;

export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "MENU" });
    }

    create() {

        // Centro x, y : Size w, h
        let width = this.sys.game.config.width;
        let height = this.sys.game.config.height;
        let center_width = this.sys.game.config.width / 2;
        let center_height = this.sys.game.config.height / 2;
        
        // Background con forma de cuaderno
        var background = this.add.image(0, 0, "mainMenuBG");
        background.setOrigin(0);
        background.setDisplaySize(width, height);
        
        // Botones
        this.arcadeButton = new MenuButton(this, width * 0.2, height * 0.7, "arcade_button");
        this.zenButton = new MenuButton(this, width * 0.8, height * 0.7, "zen_button");
        
        var creditsButton = new MenuButton(this, width * 0.95 , height * 0.9, "info_button");
        creditsButton.setScale(0.015);
        creditsButton.on('pointerdown', () => this.startCredits());
        
        // Logo
        var logo = this.add.image(center_width, center_height * 0.7, "logo");
        logo.setScale(0.4, 0.4);

        // Scores
        if (localStorage.getItem('highscoreArcade') != null) {
            this.arcadeScoreText = this.add.text(width * 0.05, height * 0.05, localStorage.getItem('highscoreArcade'), { fontFamily: "adventpro", fontStyle: 'bold' ,fontSize: '50px', fill: '#000' });
        }
        if (localStorage.getItem('highscoreZen') != null) {
            this.zenScoreText = this.add.text(width * 0.9, height * 0.05, localStorage.getItem('highscoreZen'), { fontFamily: "adventpro", fontStyle: 'bold' ,fontSize: '50px', fill: '#000' });
        }

        // Input
        var keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // Music
        this.music = this.sound.add('menu_theme', {loop: true});
        this.music.play();

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
        
        // Frutas saltando
        this.platano = new MenuFruit(this, width * 0.1, height * 0.3, "platano", 100);
        this.mora = new MenuFruit(this, width * 0.6, height * 0.3, "mora", -100);
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
    }

    // Salto a escenas
    startArcade() {
        this.music.stop();
        // Empieza la ecena arcade
        this.scene.start("ARCADES");
    }
    startZen() {
        this.music.stop();
        // Empieza la ecena zen
        this.scene.start("ZEN");
    }
    startCredits() {
        // Cambia a la escena de creditos
        this.scene.start("CREDITS");
    }
}