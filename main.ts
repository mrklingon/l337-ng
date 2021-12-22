input.onPinPressed(TouchPin.P0, function () {
    xx = 0
    for (let yy of consts) {
        shoConst(xx)
        
        xx += 1
    }
})
function shoSeason (num: number) {
    if (num == 1) {
        basic.showLeds(`
            # # . . .
            # . . # #
            . # . # #
            # # . # .
            . . . # .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            # # . . .
            # . . . .
            # # # . #
            . # # . #
            # # . # .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            # . # . #
            . # # # .
            `)
    }
    basic.pause(500)
}
function doInit () {
    _const = 0
    seasons = [
    1,
    4,
    4,
    4,
    2,
    3,
    2,
    4,
    1,
    2,
    1,
    1,
    2,
    3,
    3,
    2,
    4,
    2,
    1,
    1,
    1,
    0,
    0,
    3,
    1,
    1,
    3,
    2,
    1
    ]
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
    "coma berenices",
    "Aquila",
    "Cassiopeia",
    "Cepheus",
    "Delphinus",
    "Cancer",
    "Cygnus",
    "Crater",
    "corvus",
    "corona borealis",
    "vulpecula",
    "scutum",
    "andromeda",
    "libra",
    "virgo",
    "aries",
    "serpens",
    "ursa major"
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
    "q8",
    "m6",
    "f9",
    "b3",
    "h5",
    "v5",
    "y8"
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
    "k6",
    "g8",
    "c6",
    "i3",
    "j3",
    "s4"
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
    ["f3", "i3", "u3"],
    [
    "f8",
    "p4",
    "h4",
    "r3",
    "y3"
    ],
    [
    "f3",
    "k4",
    "l4",
    "r5",
    "o6"
    ],
    [
    "b3",
    "k2",
    "h3",
    "v3",
    "s6",
    "t2"
    ],
    [
    "g2",
    "h2",
    "m2",
    "x2"
    ],
    [
    "c3",
    "m3",
    "q2",
    "y4"
    ],
    [
    "b6",
    "k3",
    "l4",
    "h4",
    "e3",
    "s1",
    "y4"
    ],
    [
    "b1",
    "k1",
    "q3",
    "n6",
    "w1",
    "t3"
    ],
    [
    "g4",
    "n4",
    "v4",
    "x4"
    ],
    [
    "v1",
    "w1",
    "s5",
    "n3",
    "h1"
    ],
    [
    "p1",
    "l1",
    "r1",
    "n1",
    "t1"
    ],
    [
    "g2",
    "m3",
    "n1",
    "w1"
    ],
    [
    "b2",
    "h2",
    "n1",
    "t4",
    "f5",
    "l5",
    "r3"
    ],
    [
    "c4",
    "i3",
    "s2",
    "v2",
    "f1",
    "k1"
    ],
    [
    "k2",
    "m1",
    "p1",
    "q1",
    "o4",
    "w6",
    "c5"
    ],
    ["f2", "m6", "s4"],
    [
    "e2",
    "i2",
    "j2",
    "s2",
    "v3",
    "p2",
    "k2"
    ],
    [
    "j5",
    "m3",
    "s4",
    "o4",
    "l4",
    "f3"
    ]
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
    shoSeason(seasons[_const])
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
    for (let value of consts[cindx]) {
        doStar(value)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    _const = consts.length - 2
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (cnames[_const]))
    shoSeason(seasons[_const])
    shoConst(_const)
})
function splash () {
    for (let index = 0; index < 3; index++) {
        shoConst(randint(0, consts.length - 1))
        basic.pause(100)
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
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
let cnames: string[] = []
let seasons: number[] = []
let _const = 0
let consts: string[][] = []
let xx = 0
doInit()
splash()
