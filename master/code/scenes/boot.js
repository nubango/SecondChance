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
    this.load.image("platanoA", "./resources/images/fruits/bananaA.png");
    this.load.image("platanoB", "./resources/images/fruits/bananaB.png");
    this.load.image("mora", "./resources/images/fruits/black-berry-dark.png");
    this.load.image("moraA", "./resources/images/fruits/black-berry-darkA.png");
    this.load.image("moraB", "./resources/images/fruits/black-berry-darkB.png");
    this.load.image("cerezaB", "./resources/images/fruits/black-cherry.png");
    this.load.image("cerezaBA", "./resources/images/fruits/black-cherryA.png");
    this.load.image("cerezaBB", "./resources/images/fruits/black-cherryB.png");
    this.load.image("coco", "./resources/images/fruits/coconut.png");
    this.load.image("cocoA", "./resources/images/fruits/coconut.png");
    this.load.image("cocoB", "./resources/images/fruits/coconut.png");
    this.load.image("manzanaA", "./resources/images/fruits/green-apple.png");
    this.load.image("manzanaAA", "./resources/images/fruits/green-appleA.png");
    this.load.image("manzanaAB", "./resources/images/fruits/green-appleB.png");
    this.load.image("uvaA", "./resources/images/fruits/green-grape.png");
    this.load.image("uvaAA", "./resources/images/fruits/green-grapeA.png");
    this.load.image("uvaAB", "./resources/images/fruits/green-grapeB.png");
    this.load.image("limon", "./resources/images/fruits/lemon.png");
    this.load.image("limonA", "./resources/images/fruits/lemonA.png");
    this.load.image("limonB", "./resources/images/fruits/lemonB.png");
    this.load.image("lima", "./resources/images/fruits/lime.png");
    this.load.image("limaA", "./resources/images/fruits/limeA.png");
    this.load.image("limaB", "./resources/images/fruits/limeB.png");
    this.load.image("naranja", "./resources/images/fruits/orange.png");
    this.load.image("naranjaA", "./resources/images/fruits/orangeA.png");
    this.load.image("naranjaB", "./resources/images/fruits/orangeB.png");
    this.load.image("malocoton", "./resources/images/fruits/peach.png");
    this.load.image("malocotonA", "./resources/images/fruits/peachA.png");
    this.load.image("malocotonB", "./resources/images/fruits/peachB.png");
    this.load.image("pera", "./resources/images/fruits/pear.png");
    this.load.image("peraA", "./resources/images/fruits/pearA.png");
    this.load.image("peraB", "./resources/images/fruits/pearB.png");
    this.load.image("ciruela", "./resources/images/fruits/plum.png");
    this.load.image("ciruelaA", "./resources/images/fruits/plumA.png");
    this.load.image("ciruelaB", "./resources/images/fruits/plumB.png");
    this.load.image("frambuesa", "./resources/images/fruits/raspberry.png");
    this.load.image("frambuesaA", "./resources/images/fruits/raspberryA.png");
    this.load.image("frambuesaB", "./resources/images/fruits/raspberryB.png");
    this.load.image("manzanaB", "./resources/images/fruits/red-apple.png");
    this.load.image("manzanaBA", "./resources/images/fruits/red-apple.png");
    this.load.image("manzanaBB", "./resources/images/fruits/red-apple.png");
    this.load.image("cerezaA", "./resources/images/fruits/red-cherry.png");
    this.load.image("cerezaAA", "./resources/images/fruits/red-cherryA.png");
    this.load.image("cerezaAB", "./resources/images/fruits/red-cherryB.png");
    this.load.image("uvaB", "./resources/images/fruits/red-grape.png");
    this.load.image("uvaBA", "./resources/images/fruits/red-grapeA.png");
    this.load.image("uvaBB", "./resources/images/fruits/red-grapeB.png");
    this.load.image("fresa", "./resources/images/fruits/strawberry.png");
    this.load.image("fresaA", "./resources/images/fruits/strawberryA.png");
    this.load.image("fresaB", "./resources/images/fruits/strawberryB.png");
    this.load.image("sandia", "./resources/images/fruits/watermelon.png");
    this.load.image("sandiaA", "./resources/images/fruits/watermelonA.png");
    this.load.image("sandiaB", "./resources/images/fruits/watermelonB.png");
    // Tinta
    this.load.image("tinta", "./resources/images/punto-azulB.png");
  }
}