export default class CuttedButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type, escena) {
        super(scene, x, y, type);
        // Fisicas
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.existing(this);
        
        this.setScale(1);
        this.setOrigin(0.5);

        this.goingScene = escena;
    }
    
    preUpdate(time, delta) {
        if (this.y > this.scene.sys.game.config.height + 300) {
            if (this.goingScene == "ARCADES") {
                this.scene.startArcade();
            }
            else {
                this.scene.startZen();
            }
        }
    }
}