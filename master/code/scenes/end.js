export default class End extends Phaser.Scene {
  constructor() {
    super({ key: 'END', active: false });
  }
  preload() {
  }

  create() {
    let graphics = this.add.graphics();
    graphics.fillStyle(0x339999, 1);
    graphics.fillRect(100, 200, 600, 200);
    graphics.fillRect(300, 100, 100, 100);
    this.add.text(320, 110, "C", { font: "96px adventpro", fill: "#000000" });
    
    var message = this.add.text(150, 250, "Se acabó!", {font: "96px adventpro", fill: "#000000"} );
  }

  update(time, delta) {

  }
}