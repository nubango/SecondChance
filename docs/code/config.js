import Boot from "./scenes/boot.js";
import Menu from "./scenes/menu.js";
import Arcades from "./scenes/arcades.js";
import Zen from "./scenes/zen.js";
import End from "./scenes/end.js";

const config = {
    width: 1000,
    height: 500,
    parent: "horizontal",
    type: Phaser.AUTO,
    scene: [Boot, Menu, Arcades, Zen, End],
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

var game = new Phaser.Game(config);