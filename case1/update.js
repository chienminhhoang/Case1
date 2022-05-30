const canvas = document.getElementById("canvas")
const GAME_WIDTH = 500;
let total = 0;

const UNIT = 20
const EEL_COLOR = 'red'
canvas.width = GAME_WIDTH
canvas.height = 800
const ctx = canvas.getContext('2d')
const BACKGROUND_COLOR = 'black'
ctx.fillStyle = BACKGROUND_COLOR
ctx.fillRect(0, 0, GAME_WIDTH, GAME_WIDTH)
const GAME_DELAY = 0
let flag=false
let LEFT = 37
let UP = 38
let RIGHT = 39
let DOWN = 40

let scoreLabel = document.getElementById("score");
let startButton = document.getElementById("start");

class Vector2d {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let player = new eel()
let food = new Food()
let currentDirection = new Vector2d(-1, 0)

let eelInterval;

function startInterval() {
    eelInterval = setInterval(() => {
        player.move(food)
        //console.log( player.checkEat(food))
        if (player.checkEat(food)) {
            console.log("ate")
            player.grow()
            food.spawn()
            scoreLabel.innerText = ++total +"/+ ∞;"
        }
        if(total==100){
            alert("i'm full,thank bro!")

        }
    }, GAME_DELAY);
}

startButton.onclick = function () {
    clearInterval(eelInterval);
    startInterval()
    currentDirection = new Vector2d(-1, 0)

    player = new eel()
    food = new Food()

    player.draw()
    food.spawn()


    document.onkeydown = function moveSelection(evt) {
        switch (evt.keyCode) {
            case LEFT:
            case 65:
                if (currentDirection.x === 1) break

                player.speed = new Vector2d(-1, 0)
                currentDirection = new Vector2d(-1, 0)
                break;
            case RIGHT:
            case 68:
                if (currentDirection.x === -1) break;
                player.speed = new Vector2d(1, 0)
                currentDirection = new Vector2d(1, 0)
                break
            case UP:
            case 87:
                if (currentDirection.y === 1) break
                player.speed = new Vector2d(0, -1)
                currentDirection = new Vector2d(0, -1)

                break
            case DOWN:
            case 83:
                if (currentDirection.y === -1) break
                player.speed = new Vector2d(0, 1)
                currentDirection = new Vector2d(0, 1)


                break

        }
    }

};