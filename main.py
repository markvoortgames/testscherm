tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.VISIBLE)
tileDisplay.set_brightness(10)
tileDisplay.show_color(Kitronik_Zip_Tile.colors(ZipLedColors.BLACK))
n = 15

def on_forever():

    for i in range(n+1):
        for x in range(8):
            for y in range(8):
                c = abs(y - x) * 28
                # tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.set_matrix_color(x,
                    y,
                    Kitronik_Zip_Tile.rgb(c * (i / n) + 255 * (1 - i / n),
                        c * (1 - i / n) + 255 * i / n,
                        c))
                tileDisplay.show()

    for i in range(n+1):
        for x in range(8):
            for y in range(8):
                c = abs(y - x) * 28
                # tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.set_matrix_color(x,
                    y,
                    Kitronik_Zip_Tile.rgb(c,
                        c * (i / n) + 255 * (1 - i / n),
                        c * (1 - i / n) + 255 * i / n))
                tileDisplay.show()
    for i in range(n+1):
        for x in range(8):
            for y in range(8):
                c = abs(y - x) * 28
                # tileDisplay.set_matrix_color(x, y, Kitronik_Zip_Tile.rgb((y*8+x)*3, 255, (x*8+y)*3))
                tileDisplay.set_matrix_color(x,
                    y,
                    Kitronik_Zip_Tile.rgb(c * (1 - i / n) + 255 * i / n,
                        c,
                        c * (i / n) + 255 * (1 - i / n)))
                tileDisplay.show()

basic.forever(on_forever)
