class ScoreBoard {
  constructor() {
    this.x = 10
    this.y = 5
    this.w = 125
    this.h = 25
    this.score
    this.c = color(0, 0, 0)
  }

  display() {
    rect(this.x, this.y, this.w, this.h)
    textSize(18)
    text(`Score: ${this.score}`, 20, 23)
  }
}
