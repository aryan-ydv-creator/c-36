
var database;
var gameState = 0;
var playerCount;
var form,player,game;
function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new GAME()
    game.getState();
    game.start();
    
}

function draw(){
    // background("white");
    // drawSprites();
}
