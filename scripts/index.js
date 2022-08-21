
//  Global Variables

const FPS_TARGET = 30;
const UPS_TARGET = 120;
const UPS_perFrameNum = UPS_TARGET / FPS_TARGET;
const RUNNING_IN_APP = !(typeof window.AppInventor === "undefined");

let gameState = "";
let gamePaused = false;

let textConst;
let roboticFont;
let roboticFont_Italic;
let machineGunkFont;



/** This function loads resources that will be used later. */
function preload() {
    roboticFont = loadFont("fonts/RoboticCyborg-w1JY8.otf")
    roboticFont_Italic = loadFont("fonts/RoboticCyborgItalic-2O48l.otf")
    machineGunkFont = loadFont("fonts/MachineGunk-nyqg.ttf")
}

// Setup
function setup() {
    if (RUNNING_IN_APP) {
        createCanvas(windowWidth, windowHeight);
        print("Running in App")
    } else {
        createCanvas(windowWidth, (windowWidth / 19) * 9);
    }

    frameRate(FPS_TARGET);
    textConst = height / 1000;

}

// Draw
function draw() {
    textFont(machineGunkFont)
    background(255)

    if (loadedBool === false) {
        LoadingMenu()
        return;
    }

    // Check if in Current Game 
    if (gameState === "game") {
        if (gamePaused === false) {
            for (let i = 0; i < UPS_perFrameNum; i++) {
                GameUpdate()
            }
            GameDraw()
        } else {
            GameDraw()
            PauseMenu()
        }
    }

    // Main Menu
    if (gameState === "mainMenu") {
        MainMenu()
    }




}

