controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {
    progress()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        downDone = 1
        mySprite.vy = 250
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
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
    } else {
        game.gameOver(true)
    }
}
let velocityRecordInv = 0
let velocityRecord = 0
let downDone = 0
let levels = 0
let mySprite: Sprite = null
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
        velocityRecord = mySprite.vy
    } else if (mySprite.vy < 0) {
        velocityRecordInv = mySprite.vy
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
})
