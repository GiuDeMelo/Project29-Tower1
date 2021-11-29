class Slingshot{
    constructor(bodyA,pointB){
     var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.08,
      length: 4
     }

     this.pointB = pointB
     this.sling = Constraint.create(options)
     World.add(world,this.sling);
   
    }
   
     attach(body){
      this.sling.bodyA = body;
     }
   
     fly(){
      this.sling.bodyA = null;
     }
   
     display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //strokeWeight(3);
        //stroke("blue");
        line(pointA.x-20,pointA.y, pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+20,pointB.y); 
     }
   
   }