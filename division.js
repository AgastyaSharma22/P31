class Division{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height; 
        console.log(this.body);
        console.log(width);
        console.log(height);
        console.log(x);
        console.log(y);
        World.add(world,this.body);
        
       
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);   
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}


