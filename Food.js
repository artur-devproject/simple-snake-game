class Food {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = STEP
        this.h = STEP
        this.color = 'red'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    clear() {
        ctx.clearRect(this.x, this.y, this.w, this.h)
    }
}