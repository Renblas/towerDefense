
// Load Assets Array
const LOAD_ASSET_ARRAY = [
    //"scripts/library/p5.sound.min.js",
    "scripts/library/p5.clickable.js",
    "scripts/library/p5.collide2d.min.js",

    "scripts/game.js",
    "scripts/image.js",

    "images/icons/settingsIcon.png",

    "scripts/menu/mainMenu.js",
    "scripts/menu/pauseMenu.js",

]

// Variables

let loadAssetIndex = 0;
let loadingBool = false;
let loadedBool = false;

let loadingImgArray = [];


// Loading Menu
function LoadingMenu() {

    background(155)
    textAlign(CENTER, CENTER)
    textSize(64 * textConst)

    // if finished loading current asset load next one
    if (loadingBool === false) {
        LoadAssets(LOAD_ASSET_ARRAY[loadAssetIndex])
    }

    // if finished all assets, end loading stage
    if (loadAssetIndex == LOAD_ASSET_ARRAY.length - 1) {
        loadedBool = true;
        gameState = "mainMenu";
        return;
    }

    // text on screen
    text("Loading...  " + (loadAssetIndex + 1) + "/" + LOAD_ASSET_ARRAY.length,
        width * 0.5, height * 0.5)
    text(LOAD_ASSET_ARRAY[loadAssetIndex], width * 0.5, height * 0.6)


}


// Load Assets Function
function LoadAssets(assetString) {

    // say that you are currently loading something
    loadingBool = true;

    // split path into necessary components
    let splitEx = split(assetString, '/')
    let splitName = split(splitEx[splitEx.length - 1], '.')
    let splitLast = splitName[splitName.length - 1]

    // detect file type
    if (splitLast === "js") {
        let script = document.createElement('script');
        script.addEventListener('load', (event) => {
            loadAssetIndex += 1;
            loadingBool = false;
        });
        script.src = assetString;
        document.body.appendChild(script);
    } else if (splitLast === "png") {
        loadingImgArray[0] = splitName[splitName.length - 2]
        loadImage(assetString, img => {
            loadingImgArray[1] = img;
            ImageArray.push(loadingImgArray)
            loadingImgArray = [];

            loadAssetIndex += 1;
            loadingBool = false;
        })



    } else {
        print("ERROR: Wrong File Type")
    }



}