input.onPinPressed(TouchPin.P0, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
input.onGesture(Gesture.FreeFall, function () {
    if (input.runningTime() == 0) {
        basic.showNumber(0)
    } else if (input.runningTime() == 1000) {
        basic.showNumber(1)
    } else if (input.runningTime() == 2000) {
        basic.showNumber(2)
    } else if (input.runningTime() == 3000) {
        basic.showNumber(3)
    } else if (input.runningTime() == 4000) {
        basic.showNumber(4)
    } else if (input.runningTime() == 5000) {
        basic.showNumber(5)
    } else if (input.runningTime() == 6000) {
        basic.showNumber(6)
    } else if (input.runningTime() == 7000) {
        basic.showNumber(7)
    } else if (input.runningTime() == 8000) {
        basic.showNumber(8)
    } else if (input.runningTime() == 9000) {
        basic.showNumber(9)
    } else if (input.runningTime() == 10000) {
        basic.showNumber(10)
    }
})
input.onPinPressed(TouchPin.P3, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.A, function () {
    oled96.initDisplay()
    oled96.clearDisplay()
    oled96.setTextXY(0, 0)
    oled96.writeString("Bitte B Druecken")
})
input.onPinPressed(TouchPin.P2, function () {
    game.addLife(1)
})
input.onGesture(Gesture.Shake, function () {
    oled96.initDisplay()
    oled96.clearDisplay()
    oled96.setTextXY(0, 0)
    oled96.writeString("Gut")
    sprite = game.createSprite(2, 2)
    Scheilfe()
})
input.onButtonPressed(Button.AB, function () {
    oled96.initDisplay()
    oled96.clearDisplay()
    oled96.setTextXY(0, 0)
    oled96.writeString("Bitte Schueteln")
})
function Scheilfe () {
    for (let index = 0; index < 9.99999999999e+52; index++) {
        sprite.move(1)
        basic.pause(400)
        sprite.ifOnEdgeBounce()
    }
}
input.onButtonPressed(Button.B, function () {
    oled96.initDisplay()
    oled96.clearDisplay()
    oled96.setTextXY(0, 0)
    oled96.writeString("Bitte A+B Druecken")
})
input.onPinPressed(TouchPin.P1, function () {
    game.addScore(1000)
})
let sprite: game.LedSprite = null
oled96.initDisplay()
oled96.clearDisplay()
oled96.setTextXY(0, 0)
oled96.writeString("Bitte A Druecken")
game.setLife(3)
