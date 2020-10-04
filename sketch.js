var canvas, backgroundImage;
var allPlayers

var player1,player2,player3,player4,players

var player1_img,player2_img, player3_img,player4_img,track

var gameState = 0;
var playerCount;



var database;

var form, player, game;

function preload(){
    
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
    
}

function draw(){
    
}   

