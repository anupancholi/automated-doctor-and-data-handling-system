from tkinter import *
from tkinter import ttk
import random
import time
import datetime
from tkinter import messagebox



class hospital:
  def __init__(self, root):
     self.root=root
     self.root.title("Hospital")
     self.root.geometry("1540x800+0+0")
     

     lbltitle = Label(self.root, bd=20, relief=RIDGE, text="Patient's Corner", fg="black", bg="#6363B8", font=("times new roman", 35, "bold"))
     lbltitle.pack(side=TOP, fill=X)
     
     DataFrame = Frame(self.root, bd=20, relief=RIDGE)
     DataFrame.place(x=0, y=130, width=1530, height=400 )
     
     DataFrameLeft=LabelFrame(DataFrame, bd=10, relief=RIDGE, padx=10, font=("times new roman",12,"bold"), text = "Patient Information")
     DataFrame.place(x=0, y=5, width=980, height=350)

     

root=Tk()
object=hospital(root)
root.mainloop()

