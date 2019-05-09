game = new Phaser.Game(620, 272, Phaser.AUTO, 'phaser-recipe', { preload: preload, create: create, update: update });

var cursors

function preload(){
  this.load.crossOrigin = 'anonymous';
  game.load.image("bg20", "assets/images/bg20.png"),
  game.load.image("bg21", "assets/images/bg21.png"),
  game.load.image("bg22", "assets/images/bg22.png"),
  game.load.image("bg23", "assets/images/bg23.png")
}

function create(){
  this.TOTAL_WIDTH = 2560,
  game.world.setBounds(0, 0, this.TOTAL_WIDTH, game.world.height)
  this.bg = game.add.sprite(0, 0, "bg" + 2 + "0")
  this.bg.fixedToCamera = !0
  this.bg1 = game.add.sprite(game.world.centerX, game.world.centerY, "bg" + 2 + "1")
  this.bg1.anchor.setTo(.5, .5)
  this.bg2 = game.add.sprite(game.world.centerX, game.world.centerY+20, "bg" + 2 + "2")
  this.bg2.anchor.setTo(.5, .5)
  this.bg3 = game.add.sprite(game.world.centerX, game.world.centerY-45, "bg" + 2 + "3")
  this.bg3.anchor.setTo(.5, .5)

   cursors = game.input.keyboard.createCursorKeys()
   //addRain();
}

function addRain(){
   console.log("Adding rain")

   let rainParticle = this.game.add.bitmapData(15, 50);

   rainParticle.ctx.rect(0, 0, 15, 50);
   rainParticle.ctx.fillStyle = '#9cc9de';
   rainParticle.ctx.fill();

   this.emitter = this.game.add.emitter(this.game.world.centerX, -300, 400);

   this.emitter.width = this.game.world.width;
   this.emitter.angle = 10;

   this.emitter.makeParticles(rainParticle);

   this.emitter.minParticleScale = 0.1;
   this.emitter.maxParticleScale = 0.3;

   this.emitter.setYSpeed(600, 1000);
   this.emitter.setXSpeed(-5, 5);

   this.emitter.minRotation = 0;
   this.emitter.maxRotation = 0;

   this.emitter.start(false, 1600, 5, 0);

}

function update() {
    var b = game.camera.x + .5 * game.camera.width
        c = game.world.centerX - (game.camera.x + .5 * game.camera.width)
    this.bg1.x = b + .08 * c
    this.bg2.x = b + .4 * c
    this.bg3.x = b + .9 * c

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }

}

function render() {
  game.debug.cameraInfo(game.camera, 32, 32);
}
