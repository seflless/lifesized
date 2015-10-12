// The hand length of Shaq's is based on the information found here:
// http://www.insidehoops.com/forum/showthread.php?t=261350
var // Get the PPI of the display
    lifesized = require('../../src/lifesized'),
    // Image dimensions
    imageWidth = 3786,
    imageHeight = 406,
    // Length in pixels from the zero mark to the 12 inch marker in the image
    rulerImageLength = 3600;

// Scale image so that the ruler is displayed life sized
var imageElement = document.getElementById('ruler'),
    // Use lifesized's convenience function for figuring out how much you need to
    // to scale an image in order to make an object appear lifesized
    imageScale = lifesized.scale(12, rulerImageLength);

imageElement.style.width = Math.floor(imageWidth*imageScale) + 'px';
imageElement.style.height = Math.floor(imageHeight*imageScale) + 'px';

function centerRulerVertically(){
    imageElement.style.marginTop = Math.floor((window.innerHeight - parseInt(imageElement.style.height))/2) + 'px';
}

centerRulerVertically();

window.addEventListener('resize', function(){
    centerRulerVertically();
});
