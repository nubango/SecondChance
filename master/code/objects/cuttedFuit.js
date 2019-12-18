export default class CuttedFruit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type, vel) {
        super(scene, x, y, type);
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        // Propiedades
        this.body.setAcceleration(vel, -45);

        this.setScale(1);
        this.setOrigin(0.5);
    }
    
    preUpdate(time, delta) {
        if (this.y > this.scene.sys.game.config.height + 300) {
            this.muerte()
        }
    }

    muerte() {
        this.destroy();
    }
}