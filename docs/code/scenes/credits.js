import MenuButton from "../objects/menuButton.js"

export default class Credits extends Phaser.Scene {
    constructor() {
        super({ key: "CREDITS" });
    }

    create() {
        // Centro x, y : Size w, h
        let width = this.sys.game.config.width;
        let heigth = this.sys.game.config.height;
        let center_width = this.sys.game.config.width / 2;
        let center_heigth = this.sys.game.config.height / 2;

        // Background con forma de cuaderno
        var background = this.add.image(0, 0, "creditsBG");
        background.setOrigin(0);
        background.setDisplaySize(width, heigth);

        // Boton de exit
        var exitButton = new MenuButton(this, width * 0.05, heigth * 0.1, "exit_button");
        exitButton.setScale(0.05, 0.05);
        exitButton.on('pointerdown', () => this.startMenu());
    }

    startMenu() {
        // Veulve al menu principal
        this.scene.start("MENU");
    }
}

