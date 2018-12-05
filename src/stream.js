class Stream {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.shapes = [];
    this.allShapes = 200
    this.speed = 3
    this.gap = []
    this.shapeSpace = round(random(5, 7));
  }
//decrease distance between recs in a single stream
  generateShapes(x, y) {
    push()
    for (let i = 0; i < this.allShapes; i++) {

      let shape = new Shape(x, y, this.speed)
      this.shapes.push(shape)
      allShapes.push(shape)
      this.gap.push(y)
      y -= round(random(200,500))
    }
    pop()
  }

  findAndDelete(shape) {
    let index = this.shapes.indexOf(shape)
    this.shapes.splice(index, 1)
    let index2 = allShapes.indexOf(shape)
    allShapes.splice(index2, 1)
  }

  render() {
    this.shapes.forEach(shape => shape.setShape())
    this.falling()
  }

  falling() {
    this.shapes.forEach(shape => {
      if (shape.y < height) {
        shape.y += this.speed
      }
      else if (shape.y > height) {
        this.findAndDelete(shape)
        console.log('deleted')
      }
    })
  }

}


// let color1 = round(random(0, 255)), color2 = round(random(0, 255)), color3 = round(random(0, 255))
// fill(round(random(0, 255)),round(random(0, 255)),round(random(0, 255)))
