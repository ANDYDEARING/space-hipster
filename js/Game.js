var SpaceHipster = SpaceHipster || {};

//title screen
SpaceHipster.Game = function(){};

SpaceHipster.Game.prototype = {
    create: function() {
        //set world dimensions
        this.game.world.setBounds(0, 0, 1920, 1920);
        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.gane.world.height, 'space');
        //create player
        this.player = this.game.add.sprite(this.game.world.centerY, 'playership');
        this.player.scale.setTo(2);
        this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
        this.player.animations.play('fly');
        //player initial score of zero
        this.playerScore = 0;
        //enable player physics
        this.game.physics.arcade.enable(this.player);
        this.playerSpeed = 120;
        this.player.body.collideWorldBounds = true;
    },
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            //move on the direction of the input
            this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
            //the camera will follow the player in the world
            this.game.camera.follow(this.player);
        }
    },
};