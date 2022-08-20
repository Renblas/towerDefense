
// Variables

let mainMenuCreated = false;

let mainMenu_startButton;
let mainMenu_aboutButton;
let mainMenu_settingsButton;


// Draw Main Menu
function MainMenu() {
    if (mainMenuCreated === false) {
        MainMenu_Create()
    }
    background(180)

    mainMenu_startButton.draw()
    mainMenu_aboutButton.draw()
    mainMenu_settingsButton.draw()
}

function MainMenu_Create() {

    mainMenu_startButton = new Clickable();
    mainMenu_startButton.locate(100, 200);
    mainMenu_startButton.resize(250, 100);
    mainMenu_startButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
    mainMenu_startButton.cornerRadius = 10;       //Corner radius of the clickable (float)
    mainMenu_startButton.strokeWeight = 2;        //Stroke width of the clickable (float)
    mainMenu_startButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
    mainMenu_startButton.text = "Press Me";       //Text of the clickable (string)
    mainMenu_startButton.textColor = "#000000";   //Color of the text (hex number as a string)
    mainMenu_startButton.textSize = 12;           //Size of the text (integer)
    mainMenu_startButton.textFont = "sans-serif"; //Font of the text (string)
    mainMenu_startButton.textScaled = false;       //Whether to scale the text with the clickable (boolean)

    mainMenu_aboutButton = new Clickable();
    mainMenu_aboutButton.locate(100, 200);
    mainMenu_aboutButton.resize(250, 100);
    mainMenu_aboutButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
    mainMenu_aboutButton.cornerRadius = 10;       //Corner radius of the clickable (float)
    mainMenu_aboutButton.strokeWeight = 2;        //Stroke width of the clickable (float)
    mainMenu_aboutButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
    mainMenu_aboutButton.text = "Press Me";       //Text of the clickable (string)
    mainMenu_aboutButton.textColor = "#000000";   //Color of the text (hex number as a string)
    mainMenu_aboutButton.textSize = 12;           //Size of the text (integer)
    mainMenu_aboutButton.textFont = "sans-serif"; //Font of the text (string)
    mainMenu_aboutButton.textScaled = false;       //Whether to scale the text with the clickable (boolean)

    mainMenu_settingsButton = new Clickable();
    mainMenu_settingsButton.resize(150 * textConst, 150 * textConst);
    mainMenu_settingsButton.locate(width - mainMenu_settingsButton.width - 1,
        height - mainMenu_settingsButton.height - 1);
    mainMenu_settingsButton.color = "#777777";       //Background color of the clickable (hex number as a string)
    mainMenu_settingsButton.cornerRadius = 10;       //Corner radius of the clickable (float)
    mainMenu_settingsButton.strokeWeight = 2;        //Stroke width of the clickable (float)
    mainMenu_settingsButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
    mainMenu_settingsButton.image = getImage("settingsIcon"); // myImage is an image loaded from p5's loadImage()
    mainMenu_settingsButton.fitImage = true; // fits the image inside the button with the image's original aspect ratio
    mainMenu_settingsButton.imageScale = 1.0; // useful if your image has some extra transparent padding


}