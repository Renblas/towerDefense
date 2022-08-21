// Global Image Object

let ImageArray = [];

// Variables


// Image Draw-er


// Image Get function
function getImage(imgString) {
    for (let i = 0; i < ImageArray.length; i++) {
        let innerArray = ImageArray[i];
        if (innerArray[0] === imgString) {
            return innerArray[1];
        }

    }
    print("error: img not found")
}

