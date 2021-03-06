class Player {
  constructor() {
    this.width = 20
    this.height = 20
    this.location = createVector((width/2)-(this.width/2), height - 55)
    this.score = 0
  }

  display() {
    push()
    fill(220, 33, 33)
    rect(this.location.x, this.location.y, this.width, this.height, 3)
    pop()
    if (keyIsDown(LEFT_ARROW)) {
      player.location.x -= 6
      if (this.location.x < 0) {
        this.location.x = width
      }
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      player.location.x += 6
      if (this.location.x > width) {
        this.location.x = 0
      }

    }

  }
}
