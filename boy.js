class boy {
    constructor(x, y, width, height) {
        var options = {
            isStatics:true
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
	    this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        
        pop();
    }


}