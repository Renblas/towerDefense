
//  Global Variables

const FPS_TARGET = 30;
const UPS_TARGET = 120;
const UPS_perFrameNum = UPS_TARGET / FPS_TARGET;
const RUNNING_IN_APP = !(typeof window.AppInventor === "undefined");

let gameState = "loading";
let gamePaused = false;

let textConst;

// Setup
function setup() {
    if (RUNNING_IN_APP) {
        createCanvas(windowWidth, windowHeight);
        print("hi")
    } else {
        createCanvas(windowWidth, (windowWidth / 19) * 9);
    }

    frameRate(FPS_TARGET);
    textConst = height / 720;

}

// Draw
function draw() {
    background(255)
    // Check if in Current Game 
    if (gameState === "game") {
        if (gamePaused === false) {
            for (let i = 0; i < UPS_perFrameNum; i++) {
                GameUpdate()
            }
            DrawGame()
        } else {
            DrawGame()
            PauseMenu()
        }
    }

    // Main Menu
    if (gameState === "mainMenu") {
        MainMenu()
    }

    if (gameState === "loading") {
        LoadingMenu()
    }


}

