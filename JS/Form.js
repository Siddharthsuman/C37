class Form{
    constructor(){
this.input = createInput("Name");
this.button= createButton("Play");
this.greeting=createElement('h3');

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(250,50);
        
       this.input.position(250,120);
       this.button.position(250,180);       
      

        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            
            player.name = this.input.value();

            playerCount+=1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            
            this.gretting.html("hello  "+ player.name)
            this.gretting.position(250,100);
        });
     
   
    }
   
}