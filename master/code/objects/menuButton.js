import CuttedButton from "./cuttedButton.js"

export default class MenuButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        // Nombre del objeto
        this.name = type;
        // Fisicas
        scene.add.existing(this);
        // Ajustes
        this.flipX = false;
        this.setScale(1);
        this.setInteractive();
    }

    muerte() {
        // Eliminarla
        this.destroy();
    }

    corte(escena) {
        // Dividirla en dos partes, una fija y la otra movible
        if (this.cutedButtonB == null) {
            this.scene.add.image(this.x, this.y, this.name + "A");
            this.cutedButtonB = new CuttedButton(this.scene, this.x, this.y, this.name + "B", escena);
            this.muerte();
        }
    }
}