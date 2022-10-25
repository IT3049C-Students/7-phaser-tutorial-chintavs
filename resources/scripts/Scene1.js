class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "resources/images/background.png");
        this.load.image("ship", "resources/images/ship.png");
        this.load.image("ship2", "resources/images/ship2.png");
        this.load.image("ship3", "resources/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}