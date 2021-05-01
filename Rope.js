class Rope{
constructor(bodyA,fixedpoint){
 var options={
bodyA:bodyA,
pointB:fixedpoint,
stiffness:1.2,
length:250



 }
this.rope=Constraint.create(options)
this.pointB=fixedpoint
World.add(world,this.rope)
}
display(){
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)


}
}