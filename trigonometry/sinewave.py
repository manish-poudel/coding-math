from tkinter import *
import math
import numpy as np

if __name__ == "__main__":

    top = Tk()
    canvas = Canvas(top, bg="white", height=1000, width=1000)

    # Loop till 0 to 2*pi which is one complete revolution of the circle with step 0.01
    for angle in np.arange(0, 2 * math.pi, 0.01):
        x = angle * 100   # horizontal scaling by 200
        y = (math.sin(angle) * 100) + 500  # vertical scaling by 200 and shifting it down by 500
        canvas.create_rectangle(x, y, x+5, y+5, fill='black')
    canvas.pack()
    mainloop()

