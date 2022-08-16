class Snake {
    constructor(x, y) {
        this.head = new SnakeElem({ x, y }, true)
        this.tail = this.head
        this.body = [this.head]
        this.curDir = DIR.NORTH
        this.vel = STEP
    }

    draw() {
        this.body.forEach(elem => elem.draw())
    }

    addBody() {
        const newElem = new SnakeElem(this.tail)
        this.body.push(newElem)
        this.tail = newElem
    }

    update() {

        let i = this.body.length - 1
        while(i > 0) {
            this.body[i].update()
            i--
        }


        if(this.curDir !== (pressedDirection && (-pressedDirection))) {
            this.curDir = pressedDirection
        }

        switch(this.curDir) {
            case(DIR.NORTH):
                this.head.y -= this.vel
                break
            case(DIR.EAST):
                this.head.x += this.vel
                break
            case(DIR.SOUTH):
                this.head.y += this.vel
                break
            case(DIR.WEST):
                this.head.x -= this.vel
                break
        }
        
    }
}