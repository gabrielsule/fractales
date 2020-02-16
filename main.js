let angle
let angleSlider
let startWeight = 10

function setup() {
    createCanvas(500, 500)
    angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01)
    angleSlider.position(10, 500)
    angleSlider.width = 250
    angleSlider.size(500)
}

function draw() {
    background(0)
    translate(width / 2, height)
    angle = angleSlider.value() / 2
    stroke(50, 50, 250)
    branch(150, startWeight)
    translate(0, -150)
}

function branch(length, weightIn) {
    let weight = weightIn - 1
    strokeWeight(weight)
    line(0, 0, 0, -length)
    translate(0, -length)

    if (length > 12) {
        push()
        rotate(angle)
        branch(length * 0.45, weight)
        pop()

        push()
        rotate(-angle)
        branch(length * 0.55, weight)
        pop()

        push()
        rotate(-angle - angle)
        branch(length * 0.65, weight)
        pop()
    }
}