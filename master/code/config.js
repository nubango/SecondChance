const config = {
    width: 1000,
    height: 500,
    parent: "horizontal",
    type: Phaser.AUTO,
    scene: [Boot, End],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    },
    scale: { 
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    }
}


var game = new Phaser.Game(config)

/* function create() {
    this.platano = this.physics.add.image(250, 175, "banana");
    this.platano.setScale(0.25);
    this.platano.flipX = false;
    this.platano.setOrigin(0.5, 0.5);
    this.platano.setOrigin(0.5);
    this.platano.setCollideWorldBounds(true);
    this.platano.setBounce(1);
    this.platano.setAcceleration(50, 0);

} */