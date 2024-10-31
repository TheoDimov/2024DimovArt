import os
from PIL import Image

def resize_images(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.lower().endswith('.jpg'):
                img_path = os.path.join(dirpath, filename)
                img = Image.open(img_path)
                
                # Calculate the new size (quarter of the original)
                new_size = (img.width // 2, img.height // 2)
                img = img.resize(new_size, Image.LANCZOS)
                
                # Save the resized image, overwriting the original
                img.save(img_path)
                print(f'Resized: {img_path}')

def get_image_size(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
        print(f'Image size: {width} x {height} pixels')

def resize_images_in_directory(directory, new_size):
    for dirpath, _, filenames in os.walk(directory):
        for filename in filenames:
            if filename.lower().endswith('.jpg'):
                img_path = os.path.join(dirpath, filename)
                img = Image.open(img_path)
                
                # Resize the image
                img = img.resize(new_size, Image.LANCZOS)
                
                # Save the resized image, overwriting the original
                img.save(img_path)
                print(f'Resized: {img_path} to {new_size[0]} x {new_size[1]} pixels')

        
if __name__ == '__main__':
    # Replace with your root directory
    resize_images('/Users/todordimov/Downloads/2024DimovArt/Small/')
