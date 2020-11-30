@namespace
class SpriteKind:
    package = SpriteKind.create()
    button = SpriteKind.create()
    errorBin = SpriteKind.create()
    cheerioBin = SpriteKind.create()
    upBin = SpriteKind.create()
    downBin = SpriteKind.create()
    sideBin = SpriteKind.create()
    unknownBin = SpriteKind.create()
"""

Create and place game map and objects

"""

def on_b_pressed():
    global pause2
    pause2 = not (pause2)
    if True:
        box.set_velocity(0, 0)
        box.set_flag(SpriteFlag.GHOST, True)
        box.set_flag(SpriteFlag.INVISIBLE, True)
    else:
        box.set_flag(SpriteFlag.GHOST, False)
        box.set_flag(SpriteFlag.INVISIBLE, False)
        resetBox()
    scene.camera_follow_sprite(monkey)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

# Reset to initial conditions with new box and parameters for type and dimensions
def resetBox():
    global _type, boxLength, boxWidth, boxHeight, objectMaterial, objectWeight, orientation
    _type = randint(0, 2)
    if _type == 0:
        boxLength = 10
        boxWidth = 10
        boxHeight = 30
        objectMaterial = "Rubber"
        objectWeight = 1
    elif _type == 1:
        boxLength = 20
        boxWidth = 20
        boxHeight = 20
        orientation = randint(0, 1)
        objectMaterial = "Porcelain"
        objectWeight = 0.2
    else:
        boxLength = randint(10, 20)
        boxWidth = randint(10, 20)
        boxHeight = randint(10, 30)
        objectMaterial = "Unknown"
        objectWeight = randint(0, 2)
    print(_type)
    pinkButton.set_flag(SpriteFlag.GHOST, False)
    blueButton.set_flag(SpriteFlag.GHOST, False)
    box.set_flag(SpriteFlag.INVISIBLE, True)
    pause(500)
    tiles.place_on_tile(box, tiles.get_tile_location(0, 7))
    box.set_flag(SpriteFlag.INVISIBLE, False)
    pause(200)
    box.set_velocity(25, 0)
def stop_box():
    box.set_velocity(0, 0)
def go_to(target_x: number, target_y: number, final: bool = False):
    box.vx = 25
    pause((target_x - box.x) / box.vx * 1000)
    stop_box()
    box.vy = 25
    pause((target_y - box.y) / box.vy * 1000)
    stop_box()
    if final:
        resetBox()
"""

Pause the game, click reset to restart the game and bring back the box

"""
orientation = 0
objectWeight = 0
objectMaterial = ""
boxHeight = 0
boxWidth = 0
boxLength = 0
_type = 0
pinkButton: Sprite = None
monkey: Sprite = None
pause2 = False
box: Sprite = None
blueButton: Sprite = None
TOP = 1
SIDE = 0
tiles.set_tilemap(tilemap("""
    level
"""))
pause2 = False
monkey = sprites.create(img("""
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
    """),
    SpriteKind.player)
monkey.set_flag(SpriteFlag.SHOW_PHYSICS, True)
scene.camera_follow_sprite(monkey)
controller.move_sprite(monkey, 100, 100)
tiles.place_on_tile(monkey, tiles.get_tile_location(5, 7))
box = sprites.create(img("""
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
    """),
    SpriteKind.package)
blueButton = sprites.create(img("""
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
    """),
    SpriteKind.button)
tiles.place_on_tile(blueButton, tiles.get_tile_location(8, 7))
pinkButton = sprites.create(img("""
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
    """),
    SpriteKind.button)
tiles.place_on_tile(pinkButton, tiles.get_tile_location(2, 7))
unknown = sprites.create(img("""
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
    """),
    SpriteKind.unknownBin)
tiles.place_on_tile(unknown, tiles.get_tile_location(4, 9))
cheerio = sprites.create(img("""
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
    """),
    SpriteKind.cheerioBin)
tiles.place_on_tile(cheerio, tiles.get_tile_location(6, 9))
upOrientation = sprites.create(img("""
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
    """),
    SpriteKind.upBin)
tiles.place_on_tile(upOrientation, tiles.get_tile_location(12, 7))
sideOrientation = sprites.create(img("""
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
    """),
    SpriteKind.sideBin)
tiles.place_on_tile(sideOrientation, tiles.get_tile_location(10, 9))
resetBox()

def on_forever():
    scene.camera_follow_sprite(box)
    if box.overlaps_with(pinkButton):
        stop_box()
        if objectMaterial == "Unknown":
            box.say("Material: Unknown", 1000)
            pause(1000)
            go_to(unknown.x, unknown.y, True)
        elif objectMaterial == "Porcelain":
            box.say("Material: Porcelain", 1000)
            pause(1000)
            go_to(cheerio.x, cheerio.y, True)
        else:
            box.say("Material: Rubber", 1000)
            pause(1000)
            go_to(blueButton.x, blueButton.y)
            if orientation == SIDE:
                box.say("Orientation: Side", 1000)
                pause(1000)
                go_to(sideOrientation.x, sideOrientation.y, True)
            elif orientation == TOP:
                box.say("Orientation: Top", 1000)
                pause(1000)
                go_to(upOrientation.x, upOrientation.y, True)
forever(on_forever)
