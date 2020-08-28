class Stone {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0,
          friction : 1,
          density : 1.2
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("Plucking mangoes/stone.png");
    }
    
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }