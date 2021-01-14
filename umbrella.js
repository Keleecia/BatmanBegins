class Umbrella
{

    constructor(x,y)
    {
        var options = 
        {
            //restitution: 0.4,
            //friction: 0,
            isStatic:true
        }
        this.r = 100;
        this.body = Bodies.circle(x,y,this.r,options);
        //this.color = color(0,0,128);
        World.add(world, this.body);
        
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        //fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

}