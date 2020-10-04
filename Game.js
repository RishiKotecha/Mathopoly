class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('Gamestate');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        Gamestate: state
      });
    }

async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('Playercount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite 
}
}