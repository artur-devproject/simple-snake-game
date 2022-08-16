class SnakeElem {
    constructor(prevElem, isHead) {
        this.isHead = isHead || false
        this.prev = prevElem
        this.x = this.prev.x
        this.y = this.prev.y
        this.w = STEP
        this.h = STEP
        this.color = this.isHead ? 'lime' : 'green'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    update() {
        if(!this.isHead) {
            this.x = this.prev.x
            this.y = this.prev.y
        }
    }
}