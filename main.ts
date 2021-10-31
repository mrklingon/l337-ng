function doInit () {
    cn = 0
    consts = [[
    "d8",
    "h2",
    "m3",
    "s2",
    "t8",
    "x6",
    "w1"
    ]]
    cname = ["Ursa Minor"]
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
    shoStars(consts[cn])
})
function Star (text: string) {
    pos = text.substr(0, 1)
    mag = text.substr(1, 1)
    spot = starpos.indexOf(pos)
    led.plotBrightness(spot % 5, Math.trunc(spot / 5), 25 * parseFloat(mag))
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (cname[cn]))
})
let spot = 0
let mag = ""
let pos = ""
let starpos: string[] = []
let cname: string[] = []
let cn = 0
let consts: string[][] = []
function shoStars (list: any[]) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let value of list) {
        Star(value)
        basic.pause(100)
    }
}
doInit()
