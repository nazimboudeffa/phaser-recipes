game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-recipe', { preload: preload, create: create });

var cursors

function preload(){
  game.load.spritesheet("snowflakes", "assets/sprites/snowflakes.png", 17, 17);
}

function create(){
  backSnow = game.add.emitter(320, -32, 600);
  backSnow.makeParticles("snowflakes", [0, 1, 2, 3, 4, 5]);
  backSnow.maxParticleScale = 0.6;
  backSnow.minParticleScale = 0.2;
  backSnow.setYSpeed(20, 100);
  backSnow.setXSpeed(-15, 15);
  backSnow.gravity = 0;
  backSnow.width = 960;
  backSnow.minRotation = 0;
  backSnow.maxRotation = 40;
  backSnow.start(false, 14000, 20);
}
