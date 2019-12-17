export default class MenuFruit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type, vel) {
        super(scene, x, y, type);
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        // Propiedades
        this.body.setCollideWorldBounds();
        this.body.setBounce(1);
        this.body.setAcceleration(vel, 0);

        this.flipX = false;
        this.setScale(0.2);
        this.setOrigin(0.5);
    }

    corte() {
        this.destroy();
    }
}