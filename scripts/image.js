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
    print("error: img not found")
}

// Convert img path to Base64 string
function toDataURL(src, callback) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = function () {
        print("hello")
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL();
        callback(dataURL);
    };
    img.onerror = function () {
        print("error")
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
        //print("hello")
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
}

