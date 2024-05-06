namespace SpriteKind {
    export const Example = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lock`, function (sprite, location) {
    if (key > 0) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        key += -1
        lock.push(location)
    } else {
        levels += -1
        progress()
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 600, 200, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        deathCounter += 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 0) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`WallJump`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`WallJumpInv`))) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        } else if (doubleJump == 1) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            mySprite.setImage(assets.image`You`)
            doubleJump = 0
        } else if (doubleJump == 2) {
            mySprite.vy += -1000
            music.play(music.createSoundEffect(WaveShape.Square, 125, 1657, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            mySprite.setImage(assets.image`You`)
            doubleJump = 0
            timer.after(200, function () {
                mySprite.vy += 500
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dash Switch`, function (sprite, location) {
    doubleJump = 2
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite.setImage(assets.image`YouDash`)
    timer.after(1000, function () {
        tiles.setTileAt(location, assets.tile`Dash Switch`)
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 1) {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            downDone = 1
            mySprite.vy = 250
            music.play(music.createSoundEffect(WaveShape.Square, 600, 0, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Coin`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 1) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`WallJump`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`WallJumpInv`))) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        } else if (doubleJump == 1) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            mySprite.setImage(assets.image`You`)
            doubleJump = 0
        } else if (doubleJump == 2) {
            mySprite.vy += -1000
            music.play(music.createSoundEffect(WaveShape.Square, 125, 1657, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            mySprite.setImage(assets.image`You`)
            doubleJump = 0
            timer.after(200, function () {
                mySprite.vy += 500
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Slowing`, function (sprite, location) {
    if (pauseRecord == 0) {
        tmpRecord = mySprite.vy / 5
    }
    pauseRecord = 1
    mySprite.vy = tmpRecord
    mySprite.startEffect(effects.bubbles, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`KeyCollected0`)
    key += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {
    coinLastLvl = info.score()
    levelReset()
    progress()
    game.showLongText("Death Counter: " + deathCounter, DialogLayout.Top)
    mySprite.setImage(assets.image`You`)
    cameraPart = 0
})
// THIS IS NEEDED!!! 
info.onCountdownEnd(function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 0) {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            downDone = 1
            mySprite.vy = 250
            music.play(music.createSoundEffect(WaveShape.Square, 600, 0, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
})
function menuSelect (num: number) {
    levels = 0
    info.setScore(coinLastLvl)
    levelReset()
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`LOBBY1`)
        game.showLongText("World 1 - Basic Tutorial", DialogLayout.Top)
    } else if (num == 2) {
        tiles.setCurrentTilemap(tilemap`LOBBY 2`)
        game.showLongText("World 2 - Intermediate Level", DialogLayout.Top)
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        if (menu < menuMaxUnlock) {
            if (menuMaxUnlock >= menu + 1) {
                menuSelect(menu + 1)
                menu += 1
            }
        } else {
            menuSelect(1)
            menu = 1
        }
    } else if (controller.left.isPressed()) {
        if (menu > 1) {
            if (menuMaxUnlock >= menu - 1) {
                menuSelect(menu - 1)
                menu += -1
            }
        } else {
            menuSelect(menuMaxUnlock)
            menu = menuMaxUnlock
        }
    } else {
        hard = 0
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl1`)) {
            levels = 1
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl2`)) {
            levels = 2
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl3`)) {
            levels = 3
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl4`)) {
            levels = 4
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl5`)) {
            levels = 5
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl6`)) {
            levels = 6
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl7`)) {
            levels = 7
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl8`)) {
            levels = 8
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl9`)) {
            levels = 9
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl10`)) {
            levels = 10
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl11`)) {
            levels = 11
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl12`)) {
            levels = 12
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl13`)) {
            levels = 13
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Lvl14`)) {
            levels = 14
        } else {
            game.showLongText("[left/right]+[Menu] to navigate between menus. [Menu] to go into levels.", DialogLayout.Bottom)
            menuSelect(menu)
        }
        if (levels > 0) {
            levels += -1
            progress()
        }
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Example)
})
// THIS IS NEEDED!!!
info.onLifeZero(function () {
	
})
function camSpawn (col: number, row: number) {
    timer.after(5000, function () {
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`Camera`)
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Camera`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (levels == 12) {
        if (location.column == 10 && location.row == 17) {
            scene.centerCameraAt(14 * 16, 30 * 16)
            timer.after(1000, function () {
                scene.centerCameraAt(20 * 16, 34 * 16)
                timer.after(1000, function () {
                    scene.centerCameraAt(22 * 16, 42 * 16)
                    timer.after(1000, function () {
                        scene.centerCameraAt(17 * 16, 46 * 16)
                        timer.after(1000, function () {
                            scene.cameraFollowSprite(mySprite)
                        })
                    })
                })
            })
        } else if (location.column == 34 && location.row == 3) {
            scene.centerCameraAt(45 * 16, 6 * 16)
            timer.after(500, function () {
                scene.centerCameraAt(45 * 16, 12 * 16)
                timer.after(500, function () {
                    scene.centerCameraAt(45 * 16, 18 * 16)
                    timer.after(500, function () {
                        scene.centerCameraAt(45 * 16, 24 * 16)
                        timer.after(500, function () {
                            scene.centerCameraAt(45 * 16, 30 * 16)
                            timer.after(500, function () {
                                scene.centerCameraAt(45 * 16, 36 * 16)
                                timer.after(500, function () {
                                    scene.cameraFollowSprite(mySprite)
                                })
                            })
                        })
                    })
                })
            })
        }
    } else if (levels == 13) {
        game.setDialogTextColor(10)
        game.showLongText("Purple Arrow Tile dash up when jump mid-air.", DialogLayout.Bottom)
        game.setDialogTextColor(15)
    } else if (levels == 14) {
        cameraPart += 1
        levels += -1
        progress()
        mySprite.setImage(assets.image`You`)
    }
    camSpawn(location.column, location.row)
})
function progress () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Example)
    mySprite.vy = 0
    velocityRecord = 0
    velocityRecordInv = 0
    downDone = 0
    levels += 1
    timerun = 0
    if (levels == 1) {
        if (hard == 1) {
            tiles.setCurrentTilemap(tilemap`Hard 1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        } else {
            tiles.setCurrentTilemap(tilemap`Level 1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
            game.setDialogTextColor(7)
            game.showLongText("Green Gel bounces.", DialogLayout.Bottom)
            game.setDialogTextColor(15)
        }
    } else if (levels == 2) {
        if (hard == 1) {
            tiles.setCurrentTilemap(tilemap`Hard 2`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        } else {
            tiles.setCurrentTilemap(tilemap`Level 2`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        }
    } else if (levels == 3) {
        tiles.setCurrentTilemap(tilemap`Level 3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        game.setDialogTextColor(2)
        game.showLongText("Red Gel kills.", DialogLayout.Bottom)
        game.setDialogTextColor(15)
    } else if (levels == 4) {
        tiles.setCurrentTilemap(tilemap`Level 4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
    } else if (levels == 5) {
        tiles.setCurrentTilemap(tilemap`Level 5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
        game.setDialogTextColor(4)
        game.showLongText("Yellow Tile lowers your velocity when you are in it.", DialogLayout.Bottom)
        game.setDialogTextColor(15)
    } else if (levels == 6) {
        tiles.setCurrentTilemap(tilemap`Level 6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
    } else if (levels == 7) {
        tiles.setCurrentTilemap(tilemap`Level 7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 11))
        game.setDialogTextColor(6)
        game.showLongText("Teal Gel allow wall jump.", DialogLayout.Bottom)
        game.setDialogTextColor(15)
    } else if (levels == 8) {
        tiles.setCurrentTilemap(tilemap`Level 8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    } else if (levels == 9) {
        tiles.setCurrentTilemap(tilemap`Level 9`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 15))
    } else if (levels == 10) {
        tiles.setCurrentTilemap(tilemap`Level 10`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 16))
        game.setDialogTextColor(8)
        game.showLongText("Arrow Tile set double jump limit to 1 time. Purple Gel resets that.", DialogLayout.Bottom)
        game.setDialogTextColor(15)
    } else if (levels == 11) {
        tiles.setCurrentTilemap(tilemap`Level 11`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 27))
    } else if (levels == 12) {
        game.setDialogTextColor(2)
        if (menuMaxUnlock == 1) {
            menuMaxUnlock = 2
            game.showLongText("World 2 unlocked!", DialogLayout.Top)
        }
        game.showLongText("NOTE: Level 11 to 12 is a HUGE jump!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`Level 12`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 36))
        game.setDialogTextColor(15)
    } else if (levels == 13) {
        game.setDialogTextColor(2)
        game.showLongText("You can stand on the edge of red gel!", DialogLayout.Bottom)
        game.setDialogTextColor(15)
        tiles.setCurrentTilemap(tilemap`Level 0`)
        mySprite2 = sprites.create(assets.image`YouExample`, SpriteKind.Example)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 46))
        mySprite2.x += 9
        mySprite2 = sprites.create(assets.image`YouExample`, SpriteKind.Example)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 44))
        mySprite2.x += -9
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 46))
    } else if (levels == 14) {
        if (cameraPart == 1) {
            timerun = 1
            tiles.setCurrentTilemap(tilemap`Level 14b`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 47))
            mySprite2 = sprites.create(assets.image`YouExample`, SpriteKind.Example)
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(19, 31))
            mySprite2.y += 10
        } else {
            tiles.setCurrentTilemap(tilemap`Level 15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 33))
        }
    } else {
        menuSelect(menu)
        game.showLongText("Menu+[left/right] to navigate between menus. Menu to go into levels.", DialogLayout.Bottom)
    }
    for (let value of checkpoint) {
        tiles.setTileAt(value, assets.tile`Checkpoint1`)
    }
    for (let value of keyCheck) {
        tiles.setTileAt(value, assets.tile`KeyCollected0`)
    }
    for (let value of lock) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`Checkpoint1`)
    mySprite.setImage(assets.image`You`)
}
function levelReset () {
    mySprite.setImage(assets.image`You`)
    checkpoint = []
    keyCheck = []
    lock = []
    key = 0
    doubleJump = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Double Switch`, function (sprite, location) {
    doubleJump = 1
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite.setImage(assets.image`You2`)
    timer.after(1000, function () {
        tiles.setTileAt(location, assets.tile`Double Switch`)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (pauseRecord == 1) {
        pauseRecord = 0
        mySprite.vy = tmpRecord * 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Checkpoint2`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`Checkpoint1`)) {
        tiles.setTileAt(value, assets.tile`Checkpoint2`)
    }
    tiles.setTileAt(location, assets.tile`Checkpoint1`)
    coinLastLvl = info.score()
    if (hard == 1) {
        if (!(hard1Hearts[levels - 1])) {
            info.changeLifeBy(1)
            hard1Hearts[levels - 1] = true
        }
    } else if (hard == 2) {
        if (!(hard2Hearts[levels - 1])) {
            info.changeLifeBy(1)
            hard2Hearts[levels - 1] = true
        }
    }
})
let timeloop = 0
let keyCheck: tiles.Location[] = []
let checkpoint: tiles.Location[] = []
let mySprite2: Sprite = null
let timerun = 0
let velocityRecordInv = 0
let velocityRecord = 0
let hard = 0
let coinLastLvl = 0
let tmpRecord = 0
let pauseRecord = 0
let downDone = 0
let doubleJump = 0
let deathCounter = 0
let lock: tiles.Location[] = []
let key = 0
let hard2Hearts: boolean[] = []
let hard1Hearts: boolean[] = []
let cameraPart = 0
let levels = 0
let menu = 0
let menuMaxUnlock = 0
let mySprite: Sprite = null
let controlType = 0
if (game.ask("Use separated controls?")) {
    game.showLongText("[A/B] are now used for jumping and ground pounding. You are now in the lobby! Press [Menu] to enter a level. To get back from a level, press [Menu].", DialogLayout.Full)
    controlType = 1
} else {
    game.showLongText("[Up/Down] are now used for jumping and ground pounding. You are now in the lobby! Press [Menu] to enter a level. To get back from a level, press [Menu].", DialogLayout.Full)
}
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 0)
mySprite.ay = 300
menuMaxUnlock = 1
menu = 1
menuSelect(menu)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
if (false) {
    levels = 14 - 1
    cameraPart = 2 - 1
    progress()
}
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(0)
for (let index = 0; index < 12; index++) {
    hard1Hearts.push(false)
}
for (let index = 0; index < 12; index++) {
    hard2Hearts.push(false)
}
game.onUpdateInterval(1000, function () {
    if (timerun == 1) {
        info.startCountdown(1)
        if (timeloop == 0) {
            timeloop = 1
            for (let value of tiles.getTilesByType(assets.tile`SwitchRedA`)) {
                tiles.setTileAt(value, assets.tile`SwitchRedB`)
            }
            for (let value of tiles.getTilesByType(assets.tile`SwitchBlueB`)) {
                tiles.setTileAt(value, assets.tile`SwitchBlueA`)
            }
        } else {
            timeloop = 0
            for (let value of tiles.getTilesByType(assets.tile`SwitchRedB`)) {
                tiles.setTileAt(value, assets.tile`SwitchRedA`)
            }
            for (let value of tiles.getTilesByType(assets.tile`SwitchBlueA`)) {
                tiles.setTileAt(value, assets.tile`SwitchBlueB`)
            }
        }
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        velocityRecord = 0
    }
    if (mySprite.vy > 0) {
        if (pauseRecord == 0) {
            velocityRecord = mySprite.vy
        }
    } else if (mySprite.vy < 0) {
        if (pauseRecord == 0) {
            velocityRecordInv = mySprite.vy
        }
    } else if (mySprite.vy == 0) {
        if (downDone == 0) {
            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`Bounce`)) {
                if (velocityRecord >= 0 && !(controller.down.isPressed())) {
                    mySprite.vy = 0 - velocityRecord
                    if (-30 > mySprite.vy) {
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    }
                }
            } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`BounceInv`)) {
                if (velocityRecordInv <= 0 && !(controller.down.isPressed())) {
                    mySprite.vy = 0 - velocityRecordInv
                    if (30 < mySprite.vy) {
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    }
                }
            } else {
                velocityRecord = mySprite.vy
            }
        } else {
            velocityRecord = mySprite.vy
        }
        downDone = 0
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`Danger`)) {
            checkpoint = tiles.getTilesByType(assets.tile`Checkpoint1`)
            keyCheck = tiles.getTilesByType(assets.tile`KeyCollected0`)
            info.setScore(coinLastLvl)
            levels += -1
            progress()
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 600, 200, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            deathCounter += 1
        } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`ResetJump`)) {
            doubleJump = 0
            mySprite.setImage(assets.image`You`)
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`DangerInv`)) {
            checkpoint = tiles.getTilesByType(assets.tile`Checkpoint1`)
            keyCheck = tiles.getTilesByType(assets.tile`KeyCollected0`)
            info.setScore(coinLastLvl)
            levels += -1
            progress()
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 600, 200, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            deathCounter += 1
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`ResetJumpInv`)) {
            doubleJump = 0
            mySprite.setImage(assets.image`You`)
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`DangerS2`)) {
            checkpoint = tiles.getTilesByType(assets.tile`Checkpoint1`)
            keyCheck = tiles.getTilesByType(assets.tile`KeyCollected0`)
            info.setScore(coinLastLvl)
            levels += -1
            progress()
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 600, 200, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            deathCounter += 1
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        if (mySprite.tileKindAt(TileDirection.Right, assets.tile`DangerS1`)) {
            checkpoint = tiles.getTilesByType(assets.tile`Checkpoint1`)
            keyCheck = tiles.getTilesByType(assets.tile`KeyCollected0`)
            info.setScore(coinLastLvl)
            levels += -1
            progress()
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 600, 200, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            deathCounter += 1
        }
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`Bounce`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`Block`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`BounceInv`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`Danger`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`DangerInv`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`WallJump`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`WallJumpInv`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`ResetJump`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`ResetJumpInv`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`DangerS1`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`DangerS2`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`SwitchRedA`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`SwitchBlueA`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`SwitchRedB`)) {
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`SwitchBlueB`)) {
        tiles.setWallAt(value, false)
    }
})
