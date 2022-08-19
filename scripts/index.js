
//  Global Variables

const FPS_TARGET = 30;
const UPS_TARGET = 120;
const UPS_perFrameNum = UPS_TARGET / FPS_TARGET;

let gameState = "mainMenu";
let gamePaused = false;

// Setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FPS_TARGET);
}

// Draw
function draw() {
    // Check if in Current Game 
    if (gameState == "game") {
        if (gamePaused == false) {
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



}

