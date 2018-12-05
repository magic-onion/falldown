class Shape {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.c = round(random(0, 255))
    this.value;
    this.speed = speed
    this.hit = false
  }

  collide (obj) {
		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.x); //collide the cir object into this rectangle object.
      if (this.hit) {
        this.color = color(0) //set this rectangle to be black if it gets hit
        }
  }

  // sets a random shape with random size, color
  setShape () {
    push()
    fill(this.c, this.c, this.c)
    this.value = rect(this.x, this.y, shapeSize, shapeSize, 5)
    pop()
  }

  // render() {
  //   fill(190, 10, 190)
  //   this.value = rect(this.x, this.y, shapeSize, shapeSize, 5)
  //   this.falling()
  // }

  falling() {
    this.y >= height? this.y = 4: this.y += this.speed
  }


}
