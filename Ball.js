class Ball{
constructor(x,y,r){
var options={
density:1,
frictionAir:0.005

}
this.body=Bodies.circle(x,y,r,options)
this.radius=r
World.add(world,this.body)

}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipse(0,0,this.radius,this.radius)
pop()

}

}