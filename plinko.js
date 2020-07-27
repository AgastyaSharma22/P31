class Plinko{
    constructor(x,y,radius){
      var options={
          isStatic: true
      }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=10;
      this.body.shapeColor="blue";
    }
    display(){
        ellipseMode(RADIUS);

    }
}