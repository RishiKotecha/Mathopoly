class Player{
    constuctor(){

        this.name = null
        this.score = 0
        this.positionX = 0
        this.positionY = 0
    }
    static updateCount(count){
        database.ref('/').update({
          Playercount: count
        });
      }

    
        update(){
            var playerIndex = "Players/Player" + this.index;
            database.ref(playerIndex).set({
              Name:this.name,
              Score:this.score,
              
            });
        }
    

    updateScore(){

    }

    updatePosition(){
    
    }

    getCount(){
        var playerCountRef = database.ref('Playercount');
        playerCountRef.on("value",function(data){
          playerCount = data.val();
        })
    }
    
    static getPlayerInfo(){
      var PlayerInputref = database.ref("players")
      PlayerInputref.on("value",(data)=>{
        allPlayers= data.val()
      }) 

    
}