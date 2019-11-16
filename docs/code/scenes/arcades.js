export default class Arcades extends Phaser.Scene {
    constructor() {
        super({ key: "ARCADES", active: true });
    }

    create() {
        // Platano saltando
        this.platano = this.physics.add.image(250, 175, "platano");
        this.platano.setScale(0.25);
        this.platano.flipX = false;
        this.platano.setOrigin(0.5, 0.5);
        this.platano.setOrigin(0.5);
        this.platano.setCollideWorldBounds(true);
        this.platano.setBounce(1);
        this.platano.setAcceleration(100, 0);
    }

    upload(time, delta) {

    }
}

