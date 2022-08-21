
// Variables

var mainMenu_startButton;
var mainMenu_aboutButton;
var mainMenu_settingsButton;


// Draw Main Menu
function MainMenu() {

    background(180)

    textSize(225 * textConst)
    textFont(roboticFont)
    text("Cyborg", width * 0.5, height * 0.175)
    textFont(machineGunkFont)
    textSize(100 * textConst)
    text("Tower Defense", width * 0.5, height * 0.45)

    if (!mainMenu_startButton) {
        mainMenu_startButton = new Clickable();
        mainMenu_startButton.resize(400 * textConst, 100 * textConst);
        mainMenu_startButton.locate((width * 0.5) - (mainMenu_startButton.width * 0.5),
            (height * 0.6) - (mainMenu_startButton.height * 0.5));
        mainMenu_startButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
        mainMenu_startButton.cornerRadius = 10;       //Corner radius of the clickable (float)
        mainMenu_startButton.strokeWeight = 2;        //Stroke width of the clickable (float)
        mainMenu_startButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
        mainMenu_startButton.text = "Start Game";       //Text of the clickable (string)
        mainMenu_startButton.textColor = "#000000";   //Color of the text (hex number as a string)
        mainMenu_startButton.textSize = 70 * textConst;           //Size of the text (integer)
        mainMenu_startButton.textFont = machineGunkFont; //Font of the text (string)
        mainMenu_startButton.textScaled = true;       //Whether to scale the text with the clickable (boolean)
        mainMenu_startButton.onPress = function () {
            print("starting game...");
            gameState = "game";
        }
        print("created start button")
    }
    mainMenu_startButton.draw()

    if (!mainMenu_aboutButton) {
        mainMenu_aboutButton = new Clickable();
        mainMenu_aboutButton.resize(400 * textConst, 100 * textConst);
        mainMenu_aboutButton.locate((width * 0.5) - (mainMenu_aboutButton.width * 0.5),
            (height * 0.6) - (mainMenu_aboutButton.height * 0.5) + (mainMenu_aboutButton.height * 1.25));
        mainMenu_aboutButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
        mainMenu_aboutButton.cornerRadius = 10;       //Corner radius of the clickable (float)
        mainMenu_aboutButton.strokeWeight = 2;        //Stroke width of the clickable (float)
        mainMenu_aboutButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
        mainMenu_aboutButton.text = "About";       //Text of the clickable (string)
        mainMenu_aboutButton.textColor = "#000000";   //Color of the text (hex number as a string)
        mainMenu_aboutButton.textSize = 70 * textConst;           //Size of the text (integer)
        mainMenu_aboutButton.textFont = machineGunkFont; //Font of the text (string)
        mainMenu_aboutButton.textScaled = false;       //Whether to scale the text with the clickable (boolean)
        mainMenu_aboutButton.onPress = function () {
            print("starting game...");
            gameState = "game";
        }
        print("created about button")
    }
    mainMenu_aboutButton.draw()

    if (!mainMenu_settingsButton) {
        mainMenu_settingsButton = new Clickable();
        mainMenu_settingsButton.resize(150 * textConst, 150 * textConst);
        mainMenu_settingsButton.locate(width - mainMenu_settingsButton.width - 5,
            height - mainMenu_settingsButton.height - 5);
        mainMenu_settingsButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
        mainMenu_settingsButton.cornerRadius = 10;       //Corner radius of the clickable (float)
        mainMenu_settingsButton.strokeWeight = 2;        //Stroke width of the clickable (float)
        mainMenu_settingsButton.stroke = "#000000"; //Border color of the clickable (hex number as a string)
        mainMenu_settingsButton.text = "";
        mainMenu_settingsButton.image = getImage("settingsIcon"); // myImage is an image loaded from p5's loadImage()
        mainMenu_settingsButton.fitImage = true; // fits the image inside the button with the image's original aspect ratio
        mainMenu_settingsButton.imageScale = 0.8; // useful if your image has some extra transparent padding
        mainMenu_settingsButton.onPress = function () {
            print("starting game...");
            gameState = "game";
        }
        print("created settings button")
    }
    mainMenu_settingsButton.draw()
}

function MainMenu_Create() {




}