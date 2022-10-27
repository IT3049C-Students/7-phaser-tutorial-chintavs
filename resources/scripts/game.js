var config 

window.onload = function () {
    config = {
        width: 256,
        height: 272,
        backgroundcolor: 0x000000,
        scene: [Scene1, Scene2],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade: {
                debug: false
            }
        }
    } 
    var game = new Phaser.Game(config);
    
}