import CuttedButton from "./cuttedButton.js"

export default class MenuButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
 
        this.flipX = false;
        this.setScale(0.2);
        this.setOrigin(0.5);
        this.setInteractive();
    }

    muerte() {
        this.destroy();
    }

    corte() {
        if (this.cutedButtonA == null && this.cutedButtonB == null) {
            this.cutedButtonA = new CuttedButton(this.scene, this.x, this.y, this.name + "A", -100);
            this.cutedButtonB = new CuttedButton(this.scene, this.x, this.y, this.name + "B", 100);
            this.muerte();
        }
    }
}