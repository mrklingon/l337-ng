function doInit () {
    _const = 0
    cnames = [
    "ursa minor",
    "taurus",
    "orion",
    "camelopardis",
    "lyra",
    "piscis austrinus",
    "sagittarius",
    "auriga",
    "leo minor",
    "capricornus",
    "bootes",
    "coma berenices"
    ]
    consts = [
    [
    "d8",
    "h2",
    "m3",
    "q2",
    "r8",
    "v6",
    "w1"
    ],
    [
    "b8",
    "f4",
    "m8",
    "s2",
    "y8"
    ],
    [
    "f8",
    "b2",
    "e3",
    "j2",
    "o2",
    "h6",
    "m6",
    "q6",
    "v5",
    "x8"
    ],
    [
    "a3",
    "l3",
    "p3",
    "u3",
    "n3",
    "t3"
    ],
    [
    "c8",
    "h2",
    "l2",
    "v5",
    "r5"
    ],
    [
    "k9",
    "g2",
    "v3",
    "r3",
    "o2"
    ],
    [
    "x7",
    "s5",
    "o5",
    "p5",
    "k3",
    "l2",
    "i4"
    ],
    [
    "b3",
    "d8",
    "o4",
    "s2",
    "v8",
    "k4"
    ],
    [
    "p3",
    "l3",
    "r2",
    "o2",
    "v2"
    ],
    [
    "f6",
    "h2",
    "j2",
    "q2",
    "w2",
    "s2"
    ],
    [
    "a2",
    "c2",
    "k3",
    "l3",
    "h2",
    "s8",
    "y3"
    ],
    ["f3", "i3", "u3"]
    ]
    starpos = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
    ]
}
input.onButtonPressed(Button.A, function () {
    _const += 1
    if (_const == consts.length) {
        _const = 0
    }
    shoConst(_const)
})
function shoConst (cindx: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let value of consts[_const]) {
        doStar(value)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    _const = consts.length - 2
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (cnames[_const]))
    shoConst(_const)
})
input.onGesture(Gesture.Shake, function () {
    _const = randint(0, consts.length - 1)
})
function doStar (star: string) {
    spot = starpos.indexOf(star.substr(0, 1))
    mag = parseFloat(star.substr(1, 1))
    led.plotBrightness(spot % 5, Math.trunc(spot / 5), mag * 20)
}
let mag = 0
let spot = 0
let starpos: string[] = []
let consts: string[][] = []
let cnames: string[] = []
let _const = 0
doInit()
