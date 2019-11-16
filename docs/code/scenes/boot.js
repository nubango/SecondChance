export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'BOOT' });
  }
  preload() {
    // Hacer esto cuando haya cargado todo (callback)
    this.load.on("complete", () => { this.scene.start("MENU"); })
    // Carga de imagenes
    this.load.image("background", "./resources/images/background.jpg");
    this.load.image("platano", "./resources/images/fruits/banana.png");
    this.load.image("moraA", "./resources/images/fruits/black-berry-dark.png");
    this.load.image("moraB", "./resources/images/fruits/black-berry-light.png");
    this.load.image("cerezaB", "./resources/images/fruits/black-cherry.png");
    this.load.image("coco", "./resources/images/fruits/coconut.png");
    this.load.image("manzanaA", "./resources/images/fruits/green-apple.png");
    this.load.image("uvaA", "./resources/images/fruits/green-grape.png");
    this.load.image("limon", "./resources/images/fruits/lemon.png");
    this.load.image("logo", "./resources/images/web/OrigamiSlashBig.png");
  }

  create() {
    // Cuando cargue salta al menu
    //this.scene.start("MENU");
  }
}