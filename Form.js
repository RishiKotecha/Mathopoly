class Form {
    constructor() {
      this.title = createElement("h2") 
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3')
      this.resetButton = createButton("Reset")
    }
  
    display(){
      
     this.title.html("Mathopoly");
     this.title.position(displayWidth/2 - 50, 0);
   
      
     this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
     this.button.position(displayWidth/2 + 30, displayHeight/2);
  
     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
  
        player.name = this.input.value();
        console.log("buttonPressed")
        playerCount+=1;
        player.index = playerCount
        player.update();
        Player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2 - 70, displayHeight/4)
      });
      this.resetButton.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
        Player.updatecarsatend(0);
      });
      this.resetButton.position(displayWidth - 100, 20)
    
  
    }
    
    hide(){
      this.greeting.hide()
      this.input.hide();
      this.button.hide();
    }
  }
  