export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'BOOT' });
  }
  preload() {
    // Hacer esto cuando haya cargado todo (callback)
    this.load.on("complete", () => { this.scene.start("MENU"); })
    
    // < Carga de imagenes >
    // Background
    this.load.image("background", "./resources/images/background.jpg");
    // Logo
    this.load.image("logo", "./resources/images/web/OrigamiSlashBig.png");
    // Frutas
    this.load.image("platano", "./resources/images/fruits/banana.png");
    this.load.image("moraA", "./resources/images/fruits/black-berry-dark.png");
    this.load.image("moraB", "./resources/images/fruits/black-berry-light.png");
    this.load.image("cerezaB", "./resources/images/fruits/black-cherry.png");
    this.load.image("coco", "./resources/images/fruits/coconut.png");
    this.load.image("manzanaA", "./resources/images/fruits/green-apple.png");
    this.load.image("uvaA", "./resources/images/fruits/green-grape.png");
    this.load.image("limon", "./resources/images/fruits/lemon.png");
    this.load.image("lima", "./resources/images/fruits/lime.png");
    this.load.image("naranja", "./resources/images/fruits/orange.png");
    this.load.image("malocoton", "./resources/images/fruits/peach.png");
    this.load.image("pera", "./resources/images/fruits/pear.png");
    this.load.image("ciruela", "./resources/images/fruits/plum.png");
    this.load.image("frambuesa", "./resources/images/fruits/raspberry.png");
    this.load.image("manzanaB", "./resources/images/fruits/red-apple.png");
    this.load.image("cerezaA", "./resources/images/fruits/red-cherry.png");
    this.load.image("uvaB", "./resources/images/fruits/red-grape.png");
    this.load.image("frutaRara", "./resources/images/fruits/star-fruit.png");
    this.load.image("fresa", "./resources/images/fruits/strawberry.png");
    this.load.image("sandia", "./resources/images/fruits/watermelon.png");
    // Tinta
    this.load.image("tinta", "./resources/images/punto-azulB.png");
  }
}