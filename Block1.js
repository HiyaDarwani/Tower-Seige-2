class Block1 {
    constructor(x,y, width, height){
        var options ={
           restitution:0.2,
           friction:1.0,
           density:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
       
        if(this.body.speed < 4){
            push();
            translate(pos.x, pos.y);
            rotate(angle)
            fill("Lightblue");
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
            World.remove(world, this.body)
            push();
            this.Visiblity = this.Visiblity - 5
            pop();
        }
      }
};