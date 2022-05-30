class Food{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.x, this.y, UNIT, UNIT)


    }

    xoa() {
        ctx.fillStyle = BACKGROUND_COLOR
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }

    getRandomNumber() {

        let randomNumber = Math.floor(Math.random() * 500)
        randomNumber -= randomNumber % UNIT
        return randomNumber;

    }

    spawn() {
        this.xoa()
        this.x = this.getRandomNumber()
        this.y = this.getRandomNumber()
        // this.draw()
    }
diem(Food){
        if((this.x+UNIT >food.x&&this.x<= food.x+UNIT)&&
            (this.y + UNIT >= food.y<= food.y+UNIT)){
            this.total+=1
            return true
        }

}
}