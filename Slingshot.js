class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            pointB: pointB,
            bodyA: bodyA,
            stiffness: 0,
            length: 200
        }
        this.pointB = pointB

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.bodyA = null;

    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("Black")
            if(pointA.x<220){
            strokeWeight(3);
            line(pointB.x, pointB.y,pointA.x, pointA.y)
            
            
            }
            else{
                strokeWeight(3);
            
            line(pointB.x, pointB.y,pointA.x, pointA.y, )
           
            
            }
        }




        
    }
    
}