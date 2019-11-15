export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.image("banana", "./resources/images/banana.png");
  }

  create() {
    this.banana = this.add.image(100, 100, "banana");
    this.banana.setScale(0.1);

    let graphics = this.add.graphics();
    graphics.fillStyle(0xff3300, 1);
    graphics.fillRect(100, 200, 600, 300);
    graphics.fillRect(100, 100, 100, 100);
    this.add.text(120, 110, "A", { font: "96px Courier", fill: "#000000" });

    //this.scene.add("SceneC", new SceneC);
  }
  update(time, delta) {
  }
}