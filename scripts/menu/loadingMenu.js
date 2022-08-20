
// Load Assets Array
const LOAD_ASSET_ARRAY = [
    "scripts/game.js",
    "scripts/menu/mainMenu.js",
    "scripts/menu/pauseMenu.js",
]

// Variables

let loadAssetIndex = 0;
let loadingBool = false;
let loadedBool = false;


// Loading Menu
function LoadingMenu() {

    background(155)
    textAlign(CENTER, CENTER)
    textSize(64 * textConst)

    LoadAssets(LOAD_ASSET_ARRAY[loadAssetIndex])

    if (loadAssetIndex == LOAD_ASSET_ARRAY.length - 1) {
        loadedBool = true;
        gameState = "mainMenu";
        return;
    }

    text("Loading...  " + (loadAssetIndex + 1) + "/" + LOAD_ASSET_ARRAY.length,
        width * 0.5, height * 0.5)
    text(LOAD_ASSET_ARRAY[loadAssetIndex], width * 0.5, height * 0.6)


}


// Load Assets Function
function LoadAssets(assetString) {

    let splitEx = split(assetString, '/')
    let splitName = split(splitEx[splitEx.length - 1], '.')
    let splitLast = splitName[splitName.length - 1]

    if (splitLast === "js") {
        let script = document.createElement('script');
        script.addEventListener('load', (event) => {
            loadAssetIndex += 1;
            loadingBool = false;
        });
        script.src = assetString;
        document.body.appendChild(script);
    }



}