// This script exists to modify the image of the background without inline-css.
// Gets all images (item class).
const imgBackgrounds = document.querySelectorAll('.item');

// For each of the backgrounds, it gets the URL of it to set it later.
imgBackgrounds.forEach(image => {
    const imagePath = image.getAttribute('data-image-path');
    image.style.backgroundImage = `url(${imagePath})`;
}); 

