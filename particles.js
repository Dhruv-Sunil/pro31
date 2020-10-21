class particles{
    constructor(x,y,r){
    var options={
    
    restitution:0.4
   
    }
    this.r=this.r
    this.body=Bodies.circle(x,y,this.r,options)

   
    World.add(world,this.body)
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    ellipseMode(RADIUS)
    fill("red")
    ellipse(0,0,this.r,this.r)
    pop()
    }
    
    
    }