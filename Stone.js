class Box {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:false
      }
     
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      this.width = 90;
      this.height = 90;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  