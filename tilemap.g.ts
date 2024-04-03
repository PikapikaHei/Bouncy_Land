// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level 1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020202020202020202020000000202020202020202020202020200000002020202020202020202020202000000020202020000000000000002020000000202020000000000000000020200000002020000000000000200000000000004020000000000000202000000000000020000000000000202020000000000000200000000000202020200000000000002000000000303030303000000000000020000000000000000000000000000000201010101010101010101010101010102`, img`
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
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6], TileScale.Sixteen);
            case "Level 2":
            case "Level 2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202030303020202020202020202020202020000000202020202020202020202020200000002020202030303030303030202000000020202030000000000000002020000040202030000000000000000030300000202030000000200000202000000000002030000000002000002020000000000020000000202020000020200000000000200000002020200000202000000000002000003030303000003030000000000020000000000000000000000000000000201010101010101010101010101010102`, img`
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
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6], TileScale.Sixteen);
            case "Level 3":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010303030101010101010101010101010100000001010101010303030303030303000005010101010100000000000000000002020303030303000000000000000000010100000000000000010101000000000101000000000000000101010400000001010101000000000001010101000000010101010400000000010101010000000101010101000000000101010104000003030101010000000001010101010000000001010104000000010101010100000000010103030000000101010303000000000101000000000001010100000000000001010404020202010101040402020202`, img`
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
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
            case "Level 4":
            case "level5":return tiles.createTilemap(hex`1000100003030301010101010101010101010101000000010101010303030101010101010000000303030300000001010101010105000000000000000000030303030101020200000000000000000000000003030103000000020200000000000000000003000000000303000000000000000000000000000000000000000000000202040000000000000000000000000001010102020402020402020000000002010101010101010101010100000000010101010101010101010101020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
            case "Level 5":
            case "level3":return tiles.createTilemap(hex`1300100000000005050505050501010101010101010101020200000000000000010101010101010101010101000000000000000101010101010101010101010000000202000003030305050505050505010300000001010000000000000000000000000100000000010100000000060606060000000001040202020101000000000606060600000000010101010101010000000000000000000000000101010101010102020204040404020202000005050505050503030303030303030305050000000000000000000000000000000000000000000700000000000002020206060606060606060602020202000000010101060606060606060606010103030000000101010606060606060606060101000000000001010100000000000000000001010402020202010101040402020202020202`, img`
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
...................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile6], TileScale.Sixteen);
            case "Level 6":
            case "level4":return tiles.createTilemap(hex`1000100001010101010000000000000000000000010101010100000000000000000000000505050707000000000006000000000000030000000000000404010000000000000300000000000001010100000000000003000000000000070505000000000000000000000303000000000000000000000000000000000000000000000000000000000000000000000000050500030000030000000000000000000000000000000000000000000000000000000000000003000000000000020202000000000000000000000000000101010202020404020202020404040401010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,myTiles.tile7,myTiles.tile4,myTiles.tile3,myTiles.tile6,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Block":
            case "tile2":return tile2;
            case "Bounce":
            case "tile1":return tile1;
            case "BounceInv":
            case "tile3":return tile3;
            case "Flag":
            case "tile6":return tile6;
            case "Danger":
            case "tile4":return tile4;
            case "DangerInv":
            case "tile5":return tile5;
            case "Slowing":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
