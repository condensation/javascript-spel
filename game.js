var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ground','assets/ground.png'); //1
    this.load.image('ball','assets/ball.png'); //3
    this.load.image('star','assets/star.png');  //13
}

function create ()
{
    ground = this.physics.add.staticImage(400,568,'ground'); //2
    ball = this.physics.add.image(400,300,'ball'); //4

    ball.setCollideWorldBounds(true); //5
    ball.setBounce(0.7); //6
    ball.setInteractive().on('pointerdown', hideBall);

    this.physics.add.collider(ball, ground); //7


    cursors = this.input.keyboard.createCursorKeys(); //8

    //14
    for (var number=0;number<10;number=number+1) { //number++
    this.add.image(40+number*80,300,'star');
    }

}

function update ()
{
    if (cursors.left.isDown) //9
    {
        ball.setVelocityX(-160);
    }
    else if (cursors.right.isDown) //11
    {
        ball.setVelocityX(160);
    }
    else if (cursors.up.isDown) //12
    {
        ball.setVelocityY(-160);
    }
    else //10
    {
        ball.setVelocityX(0);
    }
}

function hideBall() {
    ball.alpha = 0.1;
}