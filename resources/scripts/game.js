var config 

window.onload = function () {
    config = {
        width: 256,
        height: 272,
        backgroundcolor: 0x000000,
        scene: [Scene1, Scene2]
    } 
    var game = new Phaser.Game(config);
    
}