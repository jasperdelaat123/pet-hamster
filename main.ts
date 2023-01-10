input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    music.playMelody("A F E F A F E F ", 100)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
