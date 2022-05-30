
class eel {
    constructor() {
        //vi tri ban dau cua con luoN
        this.body = [
            new Vector2d(UNIT * 20, UNIT * 10),
            new Vector2d(UNIT * 21, UNIT * 10),
            new Vector2d(UNIT * 22, UNIT * 10 )


        ]
        // vi tri luoN di chuye
        this.head=this.body[0]
        this.speed = new Vector2d(-1, 0)
    }
    // ve con luon
    draw() {

        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.fillStyle = EEL_COLOR
        for (let i = 1; i <this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)

        }
    }

    xoa(food) {

        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0,0,GAME_WIDTH,GAME_WIDTH);
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.fillStyle = EEL_COLOR
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT) //tô màu thân

        }
        food.draw()
    }
    // di chuyen tro lai khi luon dam dau vao tuong
    handleBound(){
        if(this.head.x<0){
            this.head.x= GAME_WIDTH - UNIT
        }
        if(this.head.x>GAME_WIDTH-UNIT){
            this.head.x=0
        }
        if(this.head.y<0){
            this.head.y=GAME_WIDTH-UNIT
        }
        if(this.head.y>GAME_WIDTH-UNIT){
            this.head.y=0
        }
    }
// di chuyen cua luon
    move(food) {

        this.xoa(food)// xoa di
        for (let i = 1; i< this.body.length  ; i++) {

            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }

        this.body[0].x += this.speed.x * UNIT
        this.body[0].y += this.speed.y * UNIT
        this.handleBound()
        this.draw()// ve lai

    }
// an thuc an
    checkEat(food){
        let head = this.body[0]
        return food.x === head.x && food.y === head.y
    }
    grow(){
        // dai them khi aN thuc an

        let eelLength = this.body.length
        let mountX=this.body[eelLength-1].x-this.body[eelLength-2].x
        let mountY=this.body[eelLength-1].y-this.body[eelLength-2].y
        console.log(this.body)
        let newPart= new Vector2d(
            this.body[eelLength-1].x+ mountX,
            this.body[eelLength-1].y+ mountY,

        )
        console.log(this.body.length)
        this.body.push(newPart)
        this.draw()



        }





}

