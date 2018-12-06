class ScoreBoard {
  constructor() {
    this.x = 5
    this.y = 1
    this.w = 85
    this.h = 18
    this.score
    this.c = color(0, 0, 0)
  }

  display() {
    rect(this.x, this.y, this.w, this.h)
    textSize(15)
    text(`Score: ${this.score}`, 10, 15)
  }
}
