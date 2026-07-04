input.onButtonPressed(Button.A, function () {
    if (introDone) {
        if (guess > 0) {
            guess += -1
            drawGuess()
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(160)
            drawGuess()
        }
    } else {
        introSkip = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (!(introDone)) {
        introSkip = true
    } else if (guess == target) {
        roundPoints = 10 + attemptsLeft * 2 + streak * 3
        score += roundPoints
        streak += 1
        music.playTone(659, 70)
        music.playTone(784, 70)
        music.playTone(988, 110)
        basic.showIcon(IconNames.Yes)
        basic.pause(180)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(130)
        basic.showIcon(IconNames.Diamond)
        basic.pause(130)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(90)
        basic.showIcon(IconNames.Diamond)
        basic.pause(130)
        basic.clearScreen()
        if (score >= 16) {
            led.plot(0, 4)
        }
        if (score >= 32) {
            led.plot(1, 4)
        }
        if (score >= 48) {
            led.plot(2, 4)
        }
        if (score >= 64) {
            led.plot(3, 4)
        }
        if (score >= 80) {
            led.plot(4, 4)
        }
        basic.pause(420)
        if (!(rangeUnlocked) && score >= 80) {
            rangeUnlocked = true
            music.playTone(523, 90)
            music.playTone(659, 90)
            music.playTone(784, 90)
            music.playTone(1047, 160)
            basic.showString("LVL2")
            basic.pause(180)
            basic.showString("0-19")
        }
        if (streak >= 2) {
            basic.clearScreen()
            if (streak >= 1) {
                led.plot(0, 2)
            }
            if (streak >= 2) {
                led.plot(1, 2)
            }
            if (streak >= 3) {
                led.plot(2, 2)
            }
            if (streak >= 4) {
                led.plot(3, 2)
            }
            if (streak >= 5) {
                led.plot(4, 2)
            }
            basic.pause(420)
        }
        if (rangeUnlocked) {
            maxGuess = 19
            guess = 10
        } else {
            maxGuess = 9
            guess = 5
        }
        target = randint(0, maxGuess)
        attemptsLeft = 4
        drawGuess()
    } else {
        attemptsLeft += -1
        if (attemptsLeft <= 0) {
            music.playTone(330, 120)
            music.playTone(220, 120)
            music.playTone(165, 180)
            score = 0
            streak = 0
            rangeUnlocked = false
            basic.showIcon(IconNames.Sad)
            basic.pause(450)
            basic.showString("ANS")
            guess = target
            drawGuess()
            basic.pause(900)
            basic.clearScreen()
            led.plot(0, 2)
            basic.pause(70)
            led.plot(1, 2)
            basic.pause(70)
            led.plot(2, 2)
            basic.pause(70)
            led.plot(3, 2)
            basic.pause(70)
            led.plot(4, 2)
            basic.pause(120)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(120)
            basic.showIcon(IconNames.Diamond)
            basic.pause(120)
            basic.clearScreen()
            basic.pause(90)
            basic.showString("NEW")
            basic.clearScreen()
            led.plot(2, 0)
            music.playTone(262, 60)
            basic.pause(50)
            led.plot(2, 1)
            music.playTone(330, 60)
            basic.pause(50)
            led.plot(2, 2)
            music.playTone(392, 60)
            basic.pause(50)
            led.plot(2, 3)
            music.playTone(523, 80)
            basic.pause(50)
            led.plot(2, 4)
            basic.pause(140)
            maxGuess = 9
            guess = 5
            target = randint(0, maxGuess)
            attemptsLeft = 4
            drawGuess()
        } else {
            music.playTone(262, 80)
            if (guess < target) {
                basic.showArrow(ArrowNames.North)
            } else {
                basic.showArrow(ArrowNames.South)
            }
            basic.pause(450)
            basic.clearScreen()
            if (attemptsLeft >= 1) {
                led.plot(0, 4)
            }
            if (attemptsLeft >= 2) {
                led.plot(1, 4)
            }
            if (attemptsLeft >= 3) {
                led.plot(2, 4)
            }
            basic.pause(420)
            drawGuess()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (introDone) {
        if (guess < maxGuess) {
            guess += 1
            drawGuess()
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(160)
            drawGuess()
        }
    } else {
        introSkip = true
    }
})
function drawGuess () {
    if (guess == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (guess == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (guess == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (guess == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (guess == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (guess == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (guess == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (guess == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (guess == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (guess == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (guess == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (guess == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (guess == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (guess == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (guess == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (guess == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (guess == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (guess == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (guess == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
}
let score = 0
let streak = 0
let roundPoints = 0
let introDone = false
let target = 0
let rangeUnlocked = false
let introSkip = false
let maxGuess = 0
let attemptsLeft = 0
let guess = 0
guess = 5
attemptsLeft = 4
maxGuess = 9
basic.showString("GUESS")
if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
    introSkip = true
}
if (!(introSkip)) {
    basic.showString("A-/B+")
}
if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
    introSkip = true
}
if (!(introSkip)) {
    basic.showString("AB=OK")
}
if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
    introSkip = true
}
if (!(introSkip)) {
    basic.showString("80=LV2")
}
if (rangeUnlocked) {
    maxGuess = 19
    guess = 10
} else {
    maxGuess = 9
    guess = 5
}
target = randint(0, maxGuess)
attemptsLeft = 4
drawGuess()
introDone = true
