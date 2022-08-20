// Global Image Object

let ImageObject = [];

// Variables


// Image Draw-er


// Image Get function
function getImage(imgString) {
    for (let i = 0; i < ImageObject.length; i++) {
        let innerArray = ImageObject[i];
        if (innerArray[0] === imgString) {
            return innerArray[1];
        }

    }
}