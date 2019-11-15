export default class Fruit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        // Propiedades
        this.body.setCollideWorldBounds();
        this.body.setBounce(1);
        this.body.setAcceleration(100, 0);

        this.flipX = false;
        this.setScale(0.2);
        this.setOrigin(0.5);

    }
}