const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = 40 * STEP
const height = canvas.height = 30 * STEP


function random(min, max) {
    return (Math.floor((Math.random()*((max - min)) + min) / STEP) * STEP)
}

var pressedDirection

document.addEventListener('keydown', (event)=> {
    switch(event.key) {
        case 'ArrowUp':
            pressedDirection = DIR.NORTH
            break
        case 'ArrowDown':
            pressedDirection = DIR.SOUTH
            break
        case 'ArrowLeft':
            pressedDirection = DIR.WEST
            break
        case 'ArrowRight':
            pressedDirection = DIR.EAST
            break
    }
})


const snake = new Snake(
    random(0, width),
    random(0, height)
)

let food = null

let frameCounter = 0
let framePack = 10

function loop() {
    frameCounter++

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)

    while(!food) {
        food = new Food(
            random(0, width),
            random(0, height)
        )
    }

    snake.draw()
    food.draw()

    if(frameCounter % framePack === 0) {
        snake.update()
        if(snake.head.x === food.x && snake.head.y === food.y) {
            food = null
            snake.addBody()
        }

    }

    requestAnimationFrame(loop)
}

loop()
