class Boat{
    constructor(x,y,w,h,boatpos){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        this.image = loadImage("boat.png")
        this.boatpos = boatpos
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,this.boatpos,this.w,this.h)
        pop()
    }
}