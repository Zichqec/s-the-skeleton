from sys import argv
#Package for using command line arguments.

from PIL import Image, ImageDraw
#Pillow for image editing.

#Example input:
#Python ImageCompositor.py ../../saved_data/exported_images/OutputImage.png ../../shell/master/pelt_base.png:CLIP:../../shell/master/color/black_30.png ../../shell/master/leg_br_00.png ../../shell/master/muzzle_00.png ../../shell/master/nose_00.png:CLIP:../../shell/master/color/nose_02.png ../../shell/master/lineart.png

class InvalidInputError(Exception): #I got this bit from a commenter on SoloLearn, it seems to be working as-is, though I'm not sure I need these number arguments. But hey if it's working I'm not gonna touch it lol.
    def __init__(self,number):
        self.number = number
        super().__init__(self,number)
    def __str__(self):
        return("Error: Invalid input, multiple images must be separated by :AND:, :CLIP:, or :MASK:")

#argv[0] is the program name, don't want that.
outputfile = argv[1] #File destination for the output.

#Gets a base image for the program to use to determine the size of the output file. If it has a split in it, grabs the first part of it so it's only opening one image.
if ":" in argv[2]: 
    split = argv[2].split(":")
    startingimg = Image.open(split[0])
else:
    startingimg = Image.open(argv[2])

#Gathers all the arguments from 2 onward, since those will all be input images.
filepaths = argv[2:]

#Creates a new image for the final output, and sets the size to match the input images. Your images MUST be the same size, because there's just not a good way to deal with differently sized images for this.
finalimg = Image.new("RGBA",startingimg.size)

#Used in the CLIP and MASK options. CLIP doesn't technically need it, but whatever.
transparent = Image.new("RGBA",startingimg.size)

#Makes a black BG for masks
black = Image.new("RGB",startingimg.size)
ImageDraw.floodfill(black,xy=(0,0),value=(0,0,0),thresh=255)
black = black.convert("RGBA")

#For debugging
x = ""

try:
    #Loop to combine all the images. If it's a single file path, which means a single dressup part to just be added on, it just adds it to the final image. If there's more than one file path, it splits it up and adds it piece by piece, making it a mask or clipping layer if it needs to.
    #For the record, the terminology I'm using comes from Paint Tool Sai. A mask cuts away the base image based on the content in it, and a clipping layer overlays the base image while respecting the transparency.
    for file in filepaths:
        if ":" in file: #If there's multiple images that need combined in a temp file, then added to the main file.
            split = file.split(":")
            img = Image.open(split[0])
            option = ""
            i = 0 #For error handling.
            for piece in split: #Iterates over the joined file paths/options. Sets the desired option as option, and then in the next loop when it finds a file path, it applies that option to it.
                #Delimiters
                if piece == "AND":
                    option = "AND"
                    
                elif piece == "CLIP":
                    option = "CLIP"
                    
                elif piece == "MASK":
                    option = "MASK"
                    
                else: #File paths.
                    if option == "AND":
                        add = Image.open(piece)
                        img = Image.alpha_composite(img, add)
                        
                    elif option == "CLIP":
                        #The loop here goes over every pixel of the image and gets the Alpha value, then sets the RGB values to the alpha value. Took this from png2pna.
                        mask = img
                        for x in range(mask.width):
                            for y in range(mask.height):
                                val = mask.getpixel((x,y))
                                mask.putpixel((x,y),(val[3], val[3], val[3], val[3])) 
                        
                        #Composite the white image from the loop onto the black background, then convert to black and white. Then, use that to set the alpha of the clipped image.                        
                        mask = Image.alpha_composite(black,mask).convert("L")
                        clip = Image.open(piece) #clip is the color, img is the shape
                        
                        clip.putalpha(mask)
                        img = clip
                        
                    elif option == "MASK":
                        mask = Image.open(piece)
                        img = Image.composite(img,img,mask)
                        
                    else: #A file path when no option is specified.
                        if i > 0: #If it's not the starting path.
                            raise InvalidInputError(i)
                        
                        
                    option = ""
                    i += 1
            
        else:
            img = Image.open(file)
            
        finalimg = Image.alpha_composite(finalimg, img)

    #Saves the result into the output file the user specified.
    finalimg.save(outputfile)

#These are the only exceptions I can think of; if the file path isn't correct, or the user gets the input format wrong. I added a catch-all just in case. It will also throw an error if the images aren't the same size, but the catch-all handles that fine.
except FileNotFoundError:
    print("Error: file not found "+str(x))
except InvalidInputError:
    print("Error: Invalid input, multiple images must be separated by :AND:, :CLIP:, or :MASK:")
except ValueError:
    print("Error: Images do not match")
except Exception as e:
    print("Error: "+str(e))
else:
    print("Done")