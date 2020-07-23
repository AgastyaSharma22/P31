class Plinko{
    constructor(x,y,radius){
      var options={
          isStatic: true
      }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.body.color=color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        ellipseMode(RADIUS);
        this.body.shapeColor=this.body.color;
    }
}