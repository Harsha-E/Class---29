class S_Shot {
    constructor(bodyA, pointB){

        this.sling1 = loadImage("images/sling1.png");

        this.sling2 = loadImage("images/sling2.png");

         this.sling3 = loadImage("images/sling3.png");

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 75,
            Stiffness : 0.01,
        }
        this.sling = Matter.Constraint.create(options);
        
        this.pointB = pointB;
        
        World.add(qwerty, this.sling);

    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

                image(this.sling1, 130, 300, 50, 200);

                image(this.sling2, 95, 300, 50, 115);


        if(this.sling.bodyA){

                // image(this.sling3);

                var pointA = this.sling.bodyA.position;

                var pointB = this.sling.pointB;

                push();

                if(pointA.X < 163){
                
                strokeWeight(10);

                stroke(48,22,8);

                strokeWeight(0.5);

                imageMode(CENTER);

                line(pointA.x - 25 , pointA.y, pointB.x - 10 , pointB.y);

                line(pointA.x - 15 , pointA.y, pointB.x + 20 , pointB.y - 10);
    
                image(this.sling3, pointA.x - 30 , pointA.y - 10, 15, 25);

                }

                else{
                
                stroke(48,22,8);

                strokeWeight(5);

                line(pointA.x + 20 , pointA.y, pointB.x - 10 , pointB.y);

                line(pointA.x + 20 , pointA.y, pointB.x + 20 , pointB.y - 10);
        
                imageMode(CENTER);

                image(this.sling3, pointA.x + 23 , pointA.y - 10, 15, 30);

                }
                
                pop();

        }
    }

}
