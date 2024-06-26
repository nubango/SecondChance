import CuttedFruit from "./cuttedFuit.js"

export default class MenuFruit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type, vel) {
        super(scene, x, y, type);
        // Nombre
        this.name = type;
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        // Propiedades
        this.body.setCollideWorldBounds();
        this.body.setBounce(1);
        this.body.setAcceleration(vel, 0);
        // Ajustes
        this.flipX = false;
        this.setScale(1);
        this.setOrigin(0.5);
        this.setInteractive();
    }

    muerte() {
        // Eliminarlo
        this.destroy();
    }

    corte() {
        // Dividirlo en dos partes no interactivas
        if (this.cutedFruitA == null && this.cutedFruitB == null) {
            this.cutedFruitA = new CuttedFruit(this.scene, this.x, this.y, this.name + "A", -100);
            this.cutedFruitB = new CuttedFruit(this.scene, this.x, this.y, this.name + "B", 100);
            this.muerte();
        }
    }
}