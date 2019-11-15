class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'BOOT' });
  }
  preload() {
    this.load.image("background", "./resources/images/background.jpg");
    this.load.image("platano", "./resources/images/fruits/banana.png");
    this.load.image("moraA", "./resources/images/fruits/black-berry-dark.png");
    this.load.image("moraB", "./resources/images/fruits/black-berry-light.png");
    this.load.image("cerezaB", "./resources/images/fruits/black-cherry.png");
    this.load.image("coco", "./resources/images/fruits/coconut.png");
    this.load.image("manzanaA", "./resources/images/fruits/green-apple.png");
    this.load.image("uvaA", "./resources/images/fruits/green-grape.png");
    this.load.image("limon", "./resources/images/fruits/lemon.png");
  }

  create() {
    var background = this.add.image(0, 0, "background");
    background.setOrigin(0);
    background.setDisplaySize(1000, 500)

    let graphics = this.add.graphics();
    graphics.fillStyle(0xff3300, 1);
    graphics.fillRect(100, 200, 600, 200);
    graphics.fillRect(100, 100, 100, 100);
    this.add.text(120, 110, "A", { font: "96px Courier", fill: "#000000" });
  }

  update(time, delta) { }
}