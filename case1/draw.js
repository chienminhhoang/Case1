const canvas = document.getElementById("canvas")
const GAME_WIDTH = 500;

const UNIT = 20
const EEL_COLOR = 'red'
canvas.width  = GAME_WIDTH
canvas.height= 800
const ctx = canvas.getContext('2d')
const BACKGROUND_COLOR = 'black'
ctx.fillStyle = BACKGROUND_COLOR
ctx.fillRect(0, 0, GAME_WIDTH, GAME_WIDTH)
const  GAME_DELAY=100

let LEFT = 37
let UP = 38
let RIGHT = 39
let DOWN = 40


class Vector2d {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let currentDirection = new Vector2d(-1, 0)




let player = new eel()
player.draw()
let food= new Food()
food.spawn()




setInterval(() => {
    player.move(food)
    if( player.checkEat(food)){
        player.grow()
        food.spawn()
    }
},GAME_DELAY );

document.onkeydown = function moveSelection(evt) {
    switch (evt.keyCode) {
        case LEFT:
            if (currentDirection.x === 1) break

            player.speed = new Vector2d(-1, 0)
            currentDirection = new Vector2d(-1, 0)
            break;
        case RIGHT:
            if (currentDirection.x === -1) break;
            player.speed = new Vector2d(1, 0)
            currentDirection = new Vector2d(1, 0)
            break
        case UP:
            if (currentDirection.y === 1) break
            player.speed = new Vector2d(0, -1)
            currentDirection = new Vector2d(0, -1)

            break
        case DOWN:
            if (currentDirection.y === -1) break
            player.speed = new Vector2d(0, 1)
            currentDirection = new Vector2d(0, 1)


            break

    }
}