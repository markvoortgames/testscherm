let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
tileDisplay.setBrightness(10)
tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Black))
let n = 15
basic.forever(function on_forever() {
    let i: number;
    let x: number;
    let y: number;
    let c: number;
    for (i = 0; i < n + 1; i++) {
        for (x = 0; x < 8; x++) {
            for (y = 0; y < 8; y++) {
                c = Math.abs(y - x) * 28
                //  tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.setMatrixColor(x, y, Kitronik_Zip_Tile.rgb(c * (i / n) + 255 * (1 - i / n), c * (1 - i / n) + 255 * i / n, c))
                tileDisplay.show()
            }
        }
    }
    for (i = 0; i < n + 1; i++) {
        for (x = 0; x < 8; x++) {
            for (y = 0; y < 8; y++) {
                c = Math.abs(y - x) * 28
                //  tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.setMatrixColor(x, y, Kitronik_Zip_Tile.rgb(c, c * (i / n) + 255 * (1 - i / n), c * (1 - i / n) + 255 * i / n))
                tileDisplay.show()
            }
        }
    }
    for (i = 0; i < n + 1; i++) {
        for (x = 0; x < 8; x++) {
            for (y = 0; y < 8; y++) {
                c = Math.abs(y - x) * 28
                //  tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.setMatrixColor(x, y, Kitronik_Zip_Tile.rgb(c * (1 - i / n) + 255 * i / n, c, c * (i / n) + 255 * (1 - i / n)))
                tileDisplay.show()
            }
        }
    }
})
