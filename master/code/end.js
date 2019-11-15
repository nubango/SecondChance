export default class End extends Phaser.Scene {
  constructor() {
    super({ key: 'end', active: true });
  }
  preload() {
  }

  create() {
    this.add.text(10, 10, 'Se acabó!');
    let graphics = this.add.graphics();
    graphics.fillStyle(0x339999, 1);
    graphics.fillRect(100, 200, 600, 300);
    graphics.fillRect(200, 100, 100, 100);
    this.add.text(220, 110, "B", { font: "96px Courier", fill: "#000000" });
  }

  update(time, delta) {

  }
}