console.clear();

var colors = window.colors;

var game = new Phaser.Game({
  // antialias:               true,
  // backgroundColor:         0x000000,
  // disableVisibilityChange: false,
  // enableDebug:             true,
  // height:                  600,
  // renderer:                Phaser.AUTO,
  // resolution:              1,
  // scaleMode:               Phaser.ScaleManager.NO_SCALE,
  // transparent:             false,
  // width:                   800,
  state: {

    init: function() {

    },

    preload: function() {
      // This is equivalent to <https://examples.phaser.io/assets/>.
      this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v2.0.0/assets/';
      this.load.crossOrigin = 'anonymous';
      this.load.image('dude', 'sprites/phaser-dude.png');
    },

    create: function() {
      //var sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'dude');
      // this.physics.enable(sprite);
      this.addRain();
    },

    addRain: function(){
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

    },

    update: function() {

    },

    render: function() {
      var debug = this.game.debug;
      debug.phaser(10, 580);
    },

    shutdown: function() {

    }

  }
});
