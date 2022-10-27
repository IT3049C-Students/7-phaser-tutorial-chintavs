class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "resources/images/background.png");

        // this.load.image("ship", "resources/image/ship.png");
        // this.load.image("ship2", "resources/image/ship2.png");
        // this.load.image("ship3", "resources/image/ship3.png");

        this.load.spritesheet("ship", "resources/spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("ship2", "resources/spritesheets/ship2.png", {
            frameWidth: 32,
            frameHeight: 16
        });

        this.load.spritesheet("ship3", "resources/spritesheets/ship3.png", {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet("explosion", "resources/spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    } 

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}