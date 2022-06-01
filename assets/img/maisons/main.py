import os

def get_img(path):
    img = []
    for files in os.listdir(path):
        if os.path.isdir(path + "/" + files):
            for f in get_img(path +"/"+ files):
                img.append(f)
        else:
        
            try:
                if files.split(".")[-1:][0] in ['jpg', 'png', 'jpeg'] and files not in ["coverarras.jpg", "coverlille.jpg", "covertouquet.jpg"]:
                    print(files + " appended")
                    img.append(path + "/" + files)
            except:
                print(f"{files} FAILED")
    return img

t = get_img("./")
print(len(t))
print(t)