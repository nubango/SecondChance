export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.preload.image('watermelon', 'watermelon.png');
  }

  create() {
    this.scene.start('scene');
  }

  update(time, delta) {    
  }
}