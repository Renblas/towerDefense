
// Load Assets Array
const LOAD_ASSET_ARRAY = {

}

// Variables

let loadAssetIndex = 0;

// Loading Menu
function LoadingMenu() {

    background(155)
    textAlign(CENTER, CENTER)
    textSize(64 * textConst)

    text("Loading...  " + (loadAssetIndex + 1) + "/" + LOAD_ASSET_ARRAY.length,
        width * 0.5, height * 0.5)
}


// Load Assets Function