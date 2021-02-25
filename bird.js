class bird extends base{
    constructor(x, y){
        super(x , y , 45, 45);
         
         this.image = loadImage('images/bird.png');

     }

     display(){
        /*
        this.body.position.x = mouseX;
        
        this.body.position.y = mouseY;
        */
        super.display();

     }
     
 }