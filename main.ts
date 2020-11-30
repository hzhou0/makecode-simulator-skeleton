namespace SpriteKind {
    export const package = SpriteKind.create()
    export const button = SpriteKind.create()
    export const errorBin = SpriteKind.create()
    export const cheerioBin = SpriteKind.create()
    export const upBin = SpriteKind.create()
    export const downBin = SpriteKind.create()
    export const sideBin = SpriteKind.create()
    export const unknownBin = SpriteKind.create()
}

/** Create and place game map and objects */
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    pause2 = !pause2
    if (true) {
        box.setVelocity(0, 0)
        box.setFlag(SpriteFlag.Ghost, true)
        box.setFlag(SpriteFlag.Invisible, true)
    } else {
        box.setFlag(SpriteFlag.Ghost, false)
        box.setFlag(SpriteFlag.Invisible, false)
        resetBox()
    }
    
    scene.cameraFollowSprite(monkey)
})
//  Reset to initial conditions with new box and parameters for type and dimensions
function resetBox() {
    
    _type = randint(0, 2)
    if (_type == 0) {
        boxLength = 10
        boxWidth = 10
        boxHeight = 30
        objectMaterial = "Rubber"
        objectWeight = 1
    } else if (_type == 1) {
        boxLength = 20
        boxWidth = 20
        boxHeight = 20
        orientation = randint(0, 1)
        objectMaterial = "Porcelain"
        objectWeight = 0.2
    } else {
        boxLength = randint(10, 20)
        boxWidth = randint(10, 20)
        boxHeight = randint(10, 30)
        objectMaterial = "Unknown"
        objectWeight = randint(0, 2)
    }
    
    console.log(_type)
    pinkButton.setFlag(SpriteFlag.Ghost, false)
    blueButton.setFlag(SpriteFlag.Ghost, false)
    box.setFlag(SpriteFlag.Invisible, true)
    pause(500)
    tiles.placeOnTile(box, tiles.getTileLocation(0, 7))
    box.setFlag(SpriteFlag.Invisible, false)
    pause(200)
    box.setVelocity(25, 0)
}

function stop_box() {
    box.setVelocity(0, 0)
}

function go_to(target_x: number, target_y: number, final: boolean = false) {
    box.vx = 25
    pause((target_x - box.x) / box.vx * 1000)
    stop_box()
    box.vy = 25
    pause((target_y - box.y) / box.vy * 1000)
    stop_box()
    if (final) {
        resetBox()
    }
    
}

/** Pause the game, click reset to restart the game and bring back the box */
let orientation = 0
let objectWeight = 0
let objectMaterial = ""
let boxHeight = 0
let boxWidth = 0
let boxLength = 0
let _type = 0
let pinkButton : Sprite = null
let monkey : Sprite = null
let pause2 = false
let box : Sprite = null
let blueButton : Sprite = null
let TOP = 1
let SIDE = 0
tiles.setTilemap(tilemap`
    level
`)
pause2 = false
monkey = sprites.create(img`
        ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............fffff...............
            ...........feeeeef..............
            ..........fddddeeef.............
            .........cdfddfdeeff............
            .........cdfddfdeeddf...........
            ........cdeeddddeebdc...........
            ........cddddcddeebdc...........
            ........cccccddeeefc............
            .........fddddeeeff.............
            ..........fffffeeeef............
            ............ffeeeeeef.ff........
            ...........feefeefeef.ef........
            ..........feefeefeeef.ef........
            .........fbdfdbfbbfeffef........
            .........fddfddfddbeffff........
            ..........fffffffffffff.........
    `, SpriteKind.Player)
monkey.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(monkey)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(5, 7))
box = sprites.create(img`
        f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f e e e f f f f f f f f f f f 
            f f f e e e f f e f e e f e e f 
            f e f f e e e f f f e e f e e f 
            f e e f f e e e f f e e f e e f 
            f e e f f f e e e f f e f e e f 
            f e e f e f f e e e f f f e e f 
            f e e f e e f f e e e f f e e f 
            f e e f e e f f f e e e f f e f 
            f e e f e e f e f f e e e f f f 
            f f f f f f f f f f f e e e f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f
    `, SpriteKind.package)
blueButton = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.button)
tiles.placeOnTile(blueButton, tiles.getTileLocation(8, 7))
pinkButton = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.button)
tiles.placeOnTile(pinkButton, tiles.getTileLocation(2, 7))
let unknown = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.unknownBin)
tiles.placeOnTile(unknown, tiles.getTileLocation(4, 9))
let cheerio = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.cheerioBin)
tiles.placeOnTile(cheerio, tiles.getTileLocation(6, 9))
let upOrientation = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.upBin)
tiles.placeOnTile(upOrientation, tiles.getTileLocation(12, 7))
let sideOrientation = sprites.create(img`
        . . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.sideBin)
tiles.placeOnTile(sideOrientation, tiles.getTileLocation(10, 9))
resetBox()
forever(function on_forever() {
    scene.cameraFollowSprite(box)
    if (box.overlapsWith(pinkButton)) {
        stop_box()
        if (objectMaterial == "Unknown") {
            box.say("Material: Unknown", 1000)
            pause(1000)
            go_to(unknown.x, unknown.y, true)
        } else if (objectMaterial == "Porcelain") {
            box.say("Material: Porcelain", 1000)
            pause(1000)
            go_to(cheerio.x, cheerio.y, true)
        } else {
            box.say("Material: Rubber", 1000)
            pause(1000)
            go_to(blueButton.x, blueButton.y)
            if (orientation == SIDE) {
                box.say("Orientation: Side", 1000)
                pause(1000)
                go_to(sideOrientation.x, sideOrientation.y, true)
            } else if (orientation == TOP) {
                box.say("Orientation: Top", 1000)
                pause(1000)
                go_to(upOrientation.x, upOrientation.y, true)
            }
            
        }
        
    }
    
})
