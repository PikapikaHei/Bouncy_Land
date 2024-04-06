controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 0) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`WallJump`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`WallJumpInv`))) {
            mySprite.vy = -150
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 1) {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            downDone = 1
            mySprite.vy = 250
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 1) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`WallJump`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`WallJumpInv`))) {
            mySprite.vy = -150
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Slowing`, function (sprite, location) {
    if (pauseRecord == 0) {
        tmpRecord = mySprite.vy / 5
    }
    pauseRecord = 1
    mySprite.vy = tmpRecord
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {
    progress()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controlType == 0) {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            downDone = 1
            mySprite.vy = 250
        }
    }
})
function progress () {
    mySprite.vy = 0
    velocityRecord = 0
    velocityRecordInv = 0
    downDone = 0
    levels += 1
    if (levels == 1) {
        tiles.setCurrentTilemap(tilemap`Level 1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    } else if (levels == 2) {
        tiles.setCurrentTilemap(tilemap`Level 2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    } else if (levels == 3) {
        tiles.setCurrentTilemap(tilemap`Level 3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
    } else if (levels == 4) {
        tiles.setCurrentTilemap(tilemap`Level 4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
    } else if (levels == 5) {
        tiles.setCurrentTilemap(tilemap`Level 5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    } else if (levels == 6) {
        tiles.setCurrentTilemap(tilemap`Level 6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
    } else if (levels == 7) {
        tiles.setCurrentTilemap(tilemap`Level 7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 11))
    } else if (levels == 8) {
        tiles.setCurrentTilemap(tilemap`Level 8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    } else if (levels == 9) {
        tiles.setCurrentTilemap(tilemap`Level 9`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 15))
    } else {
        game.gameOver(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (pauseRecord == 1) {
        pauseRecord = 0
        mySprite.vy = tmpRecord * 5
    }
})
let velocityRecordInv = 0
let velocityRecord = 0
let tmpRecord = 0
let pauseRecord = 0
let downDone = 0
let levels = 0
let mySprite: Sprite = null
let controlType = 0
if (game.ask("Use separated controls?")) {
    game.showLongText("A/B are now used for jumping and ground pounding.", DialogLayout.Bottom)
    controlType = 1
} else {
    game.showLongText("Up/Down are now used for jumping and ground pounding.", DialogLayout.Bottom)
}
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 0)
mySprite.ay = 300
levels = 1 - 1
progress()
scene.cameraFollowSprite(mySprite)
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
                }
            } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`BounceInv`)) {
                if (velocityRecordInv <= 0 && !(controller.down.isPressed())) {
                    mySprite.vy = 0 - velocityRecordInv
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
            levels += -1
            progress()
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`DangerInv`)) {
            levels += -1
            progress()
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
})
