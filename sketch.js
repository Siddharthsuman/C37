var canvas,backgroundImg;
var gameState=0;
var playerCount;
var database;
var form,game,player;
var allPlayers;

function setup(){
   
    createCanvas(400,400);
    database=firebase.database();
    console.log(database)

    game=new Game();
    game.getState();
    game.start();
}
function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    
    if(gameState===1)
    {
        clear();
    }
    game.play();
}

