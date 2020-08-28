class Mango {
    constructor(x, y) {
      var options = {
          isStatic : true,
          restitution : 0,
          friction : 1
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("Plucking mangoes/mango.png");
    }
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("blue");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }