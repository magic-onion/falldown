const allShapes = []
let shape;
let shapeSize = 50
let stream
let streams = []
let playerScore;
let player;
let hit = false

function setup () {
  rectMode(CORNER)
  createCanvas(700, 600)
  background(80, 80, 80)
  player = new Player
  scoreBoard = new ScoreBoard
  scoreBoard.score = player.score
  let x = 0
  for (let i = 0; i <= width/shapeSize; i++) {
    let y = round(random(-450, -10))
    let stream = new Stream(x, y)
    stream.generateShapes(x, y, shapeSize)
    streams.push(stream)
    x += (shapeSize * 2)
  }
}

function draw() {
    background(80, 80, 80)
    scoreBoard.display()
    player.display()
    streams.forEach(stream => {
      stream.render()
      stream.shapes.forEach(shape => {
        hit = collideRectRect(player.location.x, player.location.y, player.width, player.height, shape.x, shape.y, shapeSize, shapeSize)
        if (hit) {
          clear()
          background(123, 123, 123)
          textSize(75)
          text(`SCORE: ${scoreBoard.score}`, 150, 300)
          noLoop()
          player.score = scoreBoard.score
        }
        else {
          stream.speed = stream.speed + 0.00004
        }
      })
    })
    if (allShapes.length === 0) {
        background(123, 123, 123)
        textSize(75)
        text(`SCORE: ${scoreBoard.score}`, 150, 300)
        noLoop()
        player.score = scoreBoard.score
      }
    scoreBoard.score += 1
}
