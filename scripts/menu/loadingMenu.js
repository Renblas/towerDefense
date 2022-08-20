
// Load Assets Array
const LOAD_ASSET_ARRAY = [
    "scripts/game.js",
    "scripts/menu/mainMenu.js",
    "scripts/menu/pauseMenu.js",

]

// Variables

let loadAssetIndex = 0;

// Loading Menu
function LoadingMenu() {

    background(155)
    textAlign(CENTER, CENTER)
    textSize(64 * textConst)

    text("Loading...  " + (loadAssetIndex + 1) + "/" + LOAD_ASSET_ARRAY.length,
        width * 0.5, height * 0.5)
    text(LOAD_ASSET_ARRAY[loadAssetIndex], width * 0.5, height * 0.6)
}


// Load Assets Function