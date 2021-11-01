function doInit () {
    _const = 0
    cnames = ["ursa minor", ""]
    consts = [[
    "d8",
    "h2",
    "m3",
    "s2",
    "t8",
    "x6",
    "w1"
    ], ["", "", ""]]
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
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (cnames[_const]))
    shoConst(_const)
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
