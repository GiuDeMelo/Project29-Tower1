class Polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        rotate(angle);
        rectMode(CENTER);
        fill(255,245,0);
        rect(0,0,this.width, this.height);
        pop();
      }
}