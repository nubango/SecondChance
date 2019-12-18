import CuttedButton from "./cuttedButton.js"

export default class MenuButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
 
        this.name = type;
        // Fisicas
        scene.add.existing(this);

        this.flipX = false;
        this.setScale(1);
        this.setInteractive();
    }

    muerte() {
        this.destroy();
    }

    corte(escena) {
        if (this.cutedButtonB == null) {
            this.scene.add.image(this.x, this.y, this.name + "A");
            this.cutedButtonB = new CuttedButton(this.scene, this.x, this.y, this.name + "B", escena);
            this.muerte();
        }
    }
}