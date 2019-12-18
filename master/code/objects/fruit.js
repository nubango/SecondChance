import CuttedFruit from "./cuttedFuit.js"

export default class Fruit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        this.name = type;
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        // Propiedades
        var randomY = Phaser.Math.Between(-480, -680);
        this.body.setVelocityY(randomY);
        var randomX = Phaser.Math.Between(-200, 200);
        this.body.setVelocityX(randomX);
        // Ajustes
        this.flipX = false;
        this.setScale(1);
        this.setOrigin(0.5);
    }
    
    
    preUpdate(time, delta) {
        // Cuando se pase de la deadzone hay que eliminarlo
        if (this.y > this.scene.sys.game.config.height + 300) {
            this.muerte()
        }
    }
    
    muerte() {
        // Caput
        this.destroy();
    }

    corte() {
        // Dividirlo en dos partes iguales no interactivas
        if (this.cutedFruitA == null && this.cutedFruitB == null) {
            this.cutedFruitA = new CuttedFruit(this.scene, this.x, this.y, this.name + "A", -100);
            this.cutedFruitB = new CuttedFruit(this.scene, this.x, this.y, this.name + "B", 100);
            this.muerte();
        }
    }
}