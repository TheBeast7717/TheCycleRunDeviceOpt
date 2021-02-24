

var road, roadImage;
var cyclist, cyclistImage, cyclistHalt, cyclistFallImage;
var invisibleGroundUp, invisibleGroundDown, invisibleGroundLeft, invisibleGroundRight;
var redObstacle, redObstacleImage, redObstacleFallImage, redObstacleGroup;
var yellowObstacle, yellowObstacleImage, yellowObstacleFallImage, yellowObstacleGroup;
var greenObstacle, greenObstacleImage, greenObstacleFallImage, greenObstacleGroup;
var otherObstacle1Image, otherObstacle2Image, otherObstacle3Image;
var obstacle
var gameStart, gameStartImage;
var gameTitle, gameTitleImage;
var instruction, instructionImage;
var backToBeforePlay, backImage;
var restart, restartImage;
var obstacle2Group;
var energyDrinkGroup;
var energyBar;
var energyBar1Image, energyBar2Image, energyBar3Image, energyBar4Image;
var energyDrinkImage;
var message1, message1Image;
var distance = 0;
var LOADING = 0;
var BEFOREPLAY = 1;
var PLAY = 2;
var END = 3;
var INSTRUCT = 4;
var gameState = LOADING;
var energy = 1400;
var bgm, crashSound, cryFemale, cryMale, cycleMove, instructSound, startSound, energyCollectSound, gaspingSound;
var plz = 0;
var change;
var bellSound;
var upButton , upButtonImage , downButton , downButtonImage;
let touchDetecter;
x =200;
y=200;

var loadingTime = 250; 
var loadingScreen,loadingScreenImage;

var symbol , symbolImage;
var loading,loading1Image,loading2Image,loading3Image;
var deviceModel = 0;
var mobilePhone , mobilePhoneImage,computer, computerImage;
var accelerator, acceleratorImage;
var accelerationDetecter = 0;








function preload() {
  roadImage = loadImage("Road.png");
  cyclistImage = loadAnimation("mainPlayer1.png", "mainPlayer2.png");
  cyclistHalt = loadImage("mainPlayer1.png");
  redObstacleImage = loadAnimation("opponent1.png", "opponent2.png");
  redObstacleFallImage = loadImage("opponent3.png");
  yellowObstacleImage = loadAnimation("opponent4.png", "opponent5.png");
  yellowObstacleFallImage = loadImage("opponent6.png")
  greenObstacleImage = loadAnimation("opponent7.png", "opponent8.png");
  greenObstacleFallImage = loadImage("opponent9.png")
  otherObstacle1Image = loadImage("obstacle1.png");
  otherObstacle2Image = loadImage("obstacle2.png");
  otherObstacle3Image = loadImage("obstacle3.png");
  energyBar1Image = loadImage("Final Health ImageFull4.jpeg");
  energyBar2Image = loadImage("Final Health ImageFull3.jpeg");
  energyBar3Image = loadImage("Final Health ImageFull2.jpeg");
  energyBar4Image = loadImage("Final Health ImageFull1.jpeg");
  cyclistFallImage = loadImage("mainPlayer3.png");
  energyDrinkImage = loadImage("Energy_Drink_Images-removebg-preview.png");
  gameStartImage = loadImage("cycle_game_start1.1-removebg-preview.png");
  gameTitleImage = loadImage("Cycle game title Image 2.png");
  instructionImage = loadImage("Instructions_Image-removebg-preview.png");
  backImage = loadImage("BackImage-removebg-preview.png");
  restartImage = loadImage("Restart_ImageReal-removebg-preview.png");
  message1Image = loadImage("Rehydrate_Fast-removebg-preview.png");
  loadingScreenImage = loadImage("Loading Screen Gradient.png");
  symbolImage = loadImage("My Logo.png");
  loading1Image = loadImage("Loading1-removebg-preview.png");
  loading2Image = loadImage("Loading2-removebg-preview.png");
  loading3Image = loadImage("Loading3-removebg-preview.png");
  upButtonImage = loadImage("Final_Upp_Arrow-removebg-preview.png");
  downButtonImage = loadImage("Final_DownnnArrow-removebg-preview.png");
  mobilePhoneImage = loadImage("PhoneImage-removebg-preview.png");
  computerImage = loadImage("Pc_Image-removebg-preview.png");



  bgm = loadSound("Road Trip BG Music.mp3");
  crashSound = loadSound("Crash Sound.mp3");
  cryFemale = loadSound("Cry sound Female.mp3");
  cryMale = loadSound("Male scream 1.mp3");
  cycleMove = loadSound("Moving cycle sound.mp3");
  instructSound = loadSound("instruct Sound.mp3");
  startSound = loadSound("start sound.mp3");
  energyCollectSound = loadSound("enegy collect sound.mp3");
  gaspingSound = loadSound("Breathing sound.mp3");
  change = loadImage("59.jpeg");
  bellSound = loadSound("Bell sound cycle.mp3");

}



function setup() {
  createCanvas(windowWidth, windowHeight);

  //bgm.play();
  edges = createEdgeSprites();

  //creating the road
  road = createSprite(windowWidth-600, windowHeight-300,0,0);
  road.addImage(roadImage);
  road.scale = 0.4;

  // Creating THe main cyclist
  // tint(255, 127);
  cyclist = createSprite(windowWidth/2, windowHeight/2, 20, 20);
  cyclist.addImage("halt", cyclistHalt);
  cyclist.addAnimation("running", cyclistImage);
  cyclist.addImage("fall", cyclistFallImage);
  cyclist.scale = 0.067
  //cyclist.debug = true;
  cyclist.setCollider("rectangle", 80, 450, 995, 330);

  // Creating the invisible grounds
  //For the upper boundary
  invisibleGroundUp = createSprite(windowWidth/2,windowHeight/4,windowWidth, 10);
 
  invisibleGroundUp.visible = false;
  

  //For the lower boundary
  invisibleGroundDown = createSprite(350, 354, 730, 10);
  invisibleGroundDown.visible = false;

  //For left Boundary
  invisibleGroundLeft = createSprite(0, 175, 10, 350);
  invisibleGroundLeft.visible = false;

  //For Right Boundary
  invisibleGroundRight = createSprite(732, 175, 10, 350);
  invisibleGroundRight.visible = false;

  // Creating The Energy Bar
  energyBar = createSprite(windowWidth/6,windowHeight/14, 20, 20);
  energyBar.addImage("4", energyBar1Image);
  energyBar.addImage("3", energyBar2Image);
  energyBar.addImage("2", energyBar3Image);
  energyBar.addImage("1",energyBar4Image);
  energyBar.addImage("red", change);
  energyBar.scale = 1.5;
  energyBar.visible = false;

  // Creating The game Start
  gameStart = createSprite(windowWidth/2,windowHeight/2, 20, 20);
  gameStart.addImage(gameStartImage);
  gameStart.scale = 0.8;
  //gameStart.debug = true;
  gameStart.setCollider("rectangle", 5, 0, 310, 60);

  //Creating the game title
  gameTitle = createSprite(windowWidth/2,windowHeight/3, 20, 20);
  gameTitle.addImage(gameTitleImage);
  gameTitle.scale = 0.772;

  // Creating the game instructions
  instruction = createSprite(windowWidth/1.1,windowHeight/9, 40, 40);
  instruction.addImage(instructionImage);
  instruction.scale = 0.23;
  instruction.setCollider("circle", -22, -30, 107)



  // Creating the back button
  backToBeforePlay = createSprite(windowWidth/10,windowHeight/1.1, 40, 40);
  backToBeforePlay.visible = false;
  backToBeforePlay.addImage(backImage);
  backToBeforePlay.scale = 0.45;
  backToBeforePlay.setCollider("rectangle", -22, -5, 350, 90);

  // Creating the Restart button
  restart = createSprite(windowWidth/2,windowHeight/2.5, 40, 40);
  restart.addImage(restartImage);
  restart.scale = 0.4;
  restart.visible = false;
  //restart.debug = true;
  restart.setCollider("rectangle", 5, 10, 720, 100);

  // Creating the rehydrate message
  message1 = createSprite(windowWidth/1, windowHeight/14,20, 20);
  message1.addImage(message1Image);
  message1.scale = 0.4;
  message1.visible = false;
  
  // Creating touch movement buttons
  // upButton = createSprite(100,280,60,60);
  // downButton = createSprite(630,280,60,60);


  // Creating Groups

  redObstacleGroup = new Group();
  yellowObstacleGroup = new Group();
  greenObstacleGroup = new Group();
  obstacle2Group = new Group();
  energyDrinkGroup = new Group();


  // Creating content Border
  border = createSprite(windowWidth/2,windowHeight/7.5,windowWidth, 10);
  border.shapeColor = "black";
  border.visible = false;

  //Creating the loading scree
  loadingScreen = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  loadingScreen.addImage(loadingScreenImage);
  loadingScreen.visible = false;
  loadingScreen.scale = 2.5;

  symbol = createSprite(windowWidth/2,windowHeight/2,20,20);
  symbol.addImage(symbolImage);
  symbol.scale = 0.8;
  symbol.visible = false;

  loading = createSprite(windowWidth/1.9,windowHeight/1.3,20,20);
  loading.addAnimation("Loading",loading1Image,loading2Image,loading3Image);
  loading.frameDelay = 4;
  loading.scale = 0.5;



  mobilePhone = createSprite(windowWidth/4,windowHeight/1.5,40,40);
  mobilePhone.addImage(mobilePhoneImage);
  mobilePhone.visible = false;
 // mobilePhone.debug = true;
  mobilePhone.setCollider("rectangle",0,0,240,70);

  computer = createSprite(windowWidth/1.4,windowHeight/1.5,40,40);
  computer.addImage(computerImage);
  computer.scale = 0.7;
  computer.visible = false;
  //computer.debug = true;
  computer.setCollider("rectangle",0,0,180,120);


  upButton = createSprite(windowWidth/4,windowHeight/1.2,70,70);
  upButton.addImage(upButtonImage);
  upButton.visible = false;
  upButton.scale = 0.5;
  //upButton.debug = true;

  downButton = createSprite(windowWidth/1.4,windowHeight/1.2,70,70);
  downButton.addImage(downButtonImage);
  downButton.visible = false;
  downButton.scale = 0.5;
 // downButton.debug = true;

  accelerator = createSprite(windowWidth/1.2,windowHeight/2,100,40);
  accelerator.visible = false;

  normalSpeed = createSprite(windowWidth/1.2,windowHeight/1.5,100,40);
  normalSpeed.visible = false;

  



}




function draw() {
  background("black");

  // if(mousePressedOver(accelerator)&&gameState===BEFOREPLAY){
  //   accelerator.x = mouseX;
  //   accelerator.y = mouseY;
  // }

  // if(((touches.length>0)&&gameState===BEFOREPLAY)&&mouseIsOver(accelerator)){
  //   accelerator.x = mouseX;
  //   accelerator.y = mouseY;
  //   touches = [];

  // }

  console.log(touches.length);



  


  // Collision Boundary for the main cyclist
  //UP
   cyclist.collide(invisibleGroundUp);

  // //DOWN
  // cyclist.collide(invisibleGroundDown);

  // //Left
  // cyclist.collide(invisibleGroundLeft);

  // //Right
  // cyclist.collide(invisibleGroundRight);

  cyclist.collide(invisibleGroundUp);
  cyclist.collide(edges);


///////////////////////////////////////////////////////////////////////////////////////
  // In the loading state
  if(gameState===LOADING){
    loadingTime = loadingTime-1;
    console.log("Loading Time",loadingTime);
  
      loadingScreen.visible = true;
      symbol.visible = true;
      
    
  
  }else if(gameState!==LOADING){
    loadingScreen.visible = false;
    symbol.visible = false;
    loading.visible = false;
      
    
  }





  if((loadingTime<=0)&&gameState===LOADING){
    gameState = BEFOREPLAY;
  }
  //////////////////////////////////////////////////////////////////////


















  // GameStates



  if (mousePressedOver(gameStart)&& gameState ===BEFOREPLAY&&deviceModel>0 ){
    startSound.play();
    gameState = PLAY;
    cyclist.changeAnimation("running", cyclistImage);
    gameStart.visible = false;
    gameTitle.visible = false;
    bgm.play();
    bgm.setVolume(0.3)
    border.visible = true;

    mobilePhone.visible = false;
    computer.visible = false;
   
  }


  

  if((touches.length>0)&&mouseIsOver(gameStart)&&gameState===BEFOREPLAY&&deviceModel>0){
    startSound.play();
    gameState = PLAY;
    cyclist.changeAnimation("running", cyclistImage);
    gameStart.visible = false;
    gameTitle.visible = false;
    bgm.play();
    bgm.setVolume(0.3);
    border.visible = true;

    mobilePhone.visible = true;
    computer.visible = true;



    touches = [];



  }


  // Energy loss check

  if ((energy >= 1400)&&gameState===PLAY) {
    energyBar.changeAnimation("4", energyBar2Image);
    energyBar.scale = 1.6;
  }




  if (energy <= 1050) {
    energyBar.changeAnimation("3", energyBar2Image);
    energyBar.scale = 1.6;
    // energyBar.y = 37;
  }


  if (energy <= 700) {
    energyBar.changeAnimation("2", energyBar3Image);
    energyBar.scale = 1.6;
    // energyBar.y = 37;
  }









  // Touching Criteria for the cyclist
  // The Obstacle (cone , metallic fence Etc.)
  if (cyclist.isTouching(obstacle2Group) && gameState === PLAY) {

    redObstacleGroup.setVelocityXEach(6);
    yellowObstacleGroup.setVelocityXEach(6);
    greenObstacleGroup.setVelocityXEach(6);

    redObstacleGroup.setLifetimeEach(windowWidth/2);
    yellowObstacleGroup.setLifetimeEach(windowWidth/2);
    greenObstacleGroup.setLifetimeEach(windowWidth/2);

    crashSound.play();
    cryMale.play();




    gameState = END;
  }

  // The red Bicycler 
  if (cyclist.isTouching(redObstacleGroup) && gameState === PLAY) {
    redObstacleGroup.setVelocityXEach(0);
    yellowObstacleGroup.setVelocityXEach(6);
    greenObstacleGroup.setVelocityXEach(6);

    redObstacleGroup.setLifetimeEach(-1);
    yellowObstacleGroup.setLifetimeEach(windowWidth/2);
    greenObstacleGroup.setLifetimeEach(windowWidth/2);

    redObstacle.changeAnimation("redObstacleFallImage", redObstacleFallImage);

    crashSound.play();
    cryFemale.play();

    gameState = END;
  }

  //The Yellow Bicycler
  if (yellowObstacleGroup.isTouching(cyclist) && gameState === PLAY) {
    gameState = END;

    yellowObstacle.changeAnimation("yellowObstacleFallImage", yellowObstacleFallImage);

    yellowObstacleGroup.setVelocityXEach(0);
    redObstacleGroup.setVelocityXEach(6);
    greenObstacleGroup.setVelocityXEach(6);


    yellowObstacleGroup.setLifetimeEach(-1);
    redObstacleGroup.setLifetimeEach(windowWidth/2);
    greenObstacleGroup.setLifetimeEach(windowWidth/2);

    crashSound.play();
    cryFemale.play();
  }

  //The green Bicycler
  if (cyclist.isTouching(greenObstacleGroup) && gameState === PLAY) {
    redObstacleGroup.setVelocityXEach(6);
    yellowObstacleGroup.setVelocityXEach(6);
    greenObstacleGroup.setVelocityXEach(0);

    redObstacleGroup.setLifetimeEach(windowWidth/2);
    yellowObstacleGroup.setLifetimeEach(windowWidth/2);
    greenObstacleGroup.setLifetimeEach(-1);

    greenObstacle.changeAnimation("greenObstacleFallImage", greenObstacleFallImage);

    crashSound.play();
    cryFemale.play();
    gameState = END;
  }


  // Lifetime after out of window
  // if (redObstacleGroup.x<=windowWidth/2){
  //   redObstacleGroup.setLifetimeEach(0);
  // }

  






  //  Gaining Energy Drink
  if (cyclist.isTouching(energyDrinkGroup)) {
    energy = energy + 550;
    energyDrinkGroup.destroyEach();
    energyCollectSound.play();
    energyCollectSound.setVolume(5);
  }

  //Restarting the game
  if (((mousePressedOver(restart) && gameState === END||touches.length >0)&&mouseIsOver(restart))) {
    gameState = BEFOREPLAY;

    obstacle2Group.destroyEach();
    redObstacleGroup.destroyEach();
    yellowObstacleGroup.destroyEach();
    greenObstacleGroup.destroyEach();
    energyDrinkGroup.destroyEach();
    cyclist.changeAnimation("halt", cyclistHalt);
    energy = 1400;
    distance = 0;
    restart.visible = false;
    instructSound.play();
    gaspingSound.stop();
    plz = 0;
    //stop();
    // restart.x = 0;
    deviceModel = 0;
    touches = [];
    
  }

  // Fixing the depth of the sprites 
  // obstacle2Group.depth = cyclist.depth;
  // cyclist.depth = cyclist.depth+1;
  
  
  // if(redObstacleGroup.y>=cyclist.y){
  //   redObstacleGroup.depth = cyclist.depth;
  //   cyclist.depth +=1;
    
  // }
  
  //  if(cyclist.y>=redObstacleGroup.y){
  //   cyclist.depth = redObstacleGroup.depth;
  //   cyclist.depth -=1;
  // }

  // For obstacles depth < energy bar
  energyBar.depth = obstacle2Group.depth;
  energyBar.depth = energyBar.depth +1;
  
  // For restart depth> every sprite
  restart.depth = cyclist.depth;
  restart.depth = restart.depth +1;
  
  
  // executing bell sound
  if(keyWentDown("space")&&gameState===PLAY){
    bellSound.play();
    
  }


  // No Inspection !!
  document.addEventListener('contextmenu', function(e) { 
    e.preventDefault(); });
    
   


    //Creating the modes according to the device in which the game is being played

  //   if(mousePressedOver(mobilePhone)&&gameState===BEFOREPLAY){
  //     deviceModel = 1;
  //   }
  
  // //Mobile Phones
  // if(deviceModel===1){
  //   upButton.visible = true;
  //   downButton.visible = true;
  // }else if(deviceModel!==1){
  //   upButton.visible = false;
  //   downButton.visible = false;
  // }


  // // Computers
  // if(mousePressedOver(computer)&&gameState===BEFOREPLAY){
  //   deviceModel = 2;
  // }

  // // if(deviceModel===2){

  // // }


  document.addEventListener("orientationchange", function(event){
    switch(window.orientation) 
    {  
        case -90: case 90:
            /* Device is in landscape mode */
            break; 
        default:
            /* Device is in portrait mode */
    }
});





  
  
  
  
 




  drawSprites();

  /////////////////////////////////////////////////////////// 

  if (mousePressedOver(instruction) && gameState === BEFOREPLAY) {
    instructSound.play();
    gameState = INSTRUCT;
    instruction.visible = false;
    
  }

  if((touches.length>0)&&mouseIsOver(instruction)&&gameState===BEFOREPLAY){
    instructSound.play();
    gameState = INSTRUCT;
    instruction.visible = false;
    touches = [];


  }

  /////////////////////////////////////////////////////////////////////////


  // Mobile phone mode
  if(mousePressedOver(mobilePhone)&&gameState===BEFOREPLAY){
    deviceModel = 1;
    console.log(deviceModel);

  }

  if(((touches.length>0)&&mouseIsOver(mobilePhone)&&gameState===BEFOREPLAY)){

    deviceModel = 1;
    console.log(deviceModel);
    touches = [];

  }


  if((deviceModel===1)&&gameState===BEFOREPLAY){
    upButton.visible = true;
    downButton.visible = true;
    // accelerator.visible = true;
    // normalSpeed.visible = true;




    textSize(30);
    fill(201, 189, 56);
    text("TouchMode : ON",windowWidth/2.5,windowHeight/1.2);
  }
  else if(deviceModel!==1){
    upButton.visible = false;
    downButton.visible = false;
    accelerator.visible = false;
    normalSpeed.visible = false;

    





  }
  
  // Up Button
  if((touches.length>0)&&mouseIsOver(upButton) &&deviceModel===1 &&gameState===PLAY){
    cyclist.y = cyclist.y - 8;
  }

  // Down Button
  if((touches.length>0)&&mouseIsOver(downButton) &&deviceModel===1 &&gameState===PLAY){
    cyclist.y = cyclist.y + 8;
  }


  if((touches.length>0)&&mouseIsOver(accelerator)&&deviceModel===1&&gameState===PLAY){
    accelerationDetecter = 1


  }

  

 
      
      


  // Computer Mode
  if(mousePressedOver(computer)&&gameState===BEFOREPLAY){
    deviceModel = 2;
    console.log("Computer",deviceModel)
  }

  if((touches.length>0)&&mouseIsOver(computer)&&gameState===BEFOREPLAY){
    deviceModel = 2;
    console.log("Computer",deviceModel);
    touches = [];

  }






  if((deviceModel===2)&&gameState===BEFOREPLAY){
    textSize(30);
    fill(201, 189, 56);
    text("ComputerMode : ON",windowWidth/2.7,windowHeight/1.2)
  }








  /////////////////////////////////////////////////////////////////////////

  if (gameState === INSTRUCT) {
    cyclist.visible = false;
    gameStart.visible = false;
    gameTitle.visible = false;
    backToBeforePlay.visible = true;
  }


  // Pressing back
  if (mousePressedOver(backToBeforePlay) && gameState === INSTRUCT) {
    gameState = BEFOREPLAY;
    instructSound.play();

  }

  if((touches.length>0)&&mouseIsOver(backToBeforePlay)&&gameState===INSTRUCT){
    gameState = BEFOREPLAY;
    instructSound.play();
    touches = []; 

  }












  if (gameState === INSTRUCT) {
    textSize(30);

    fill(229, 237, 152);
    text("Instructions", windowWidth/2.2, windowHeight/13);

    fill(222, 222, 222);
    textSize(22);
    text(" You are Max , and you are riding a bicycle in a bicycle marathon race.",windowWidth/18,windowHeight/7);

    text(" Don't collide with other competitors or the obstacles in way like cones , pits or metallic fences.  Collect the energy drink in ",windowWidth/18,windowHeight/5);
    
    text("your way otherwise you will get dehydrated and will lose the marathon .",windowWidth/18,windowHeight/4);
    
    text("Choose your device ( Smartphone or PC)",windowWidth/3.5,windowHeight/3.3);

    fill(222, 215, 84);
    text("Use the buttons provided on the screen (For mobile phones). Please try to drag over the buttons to let the device capture ",windowWidth/18,windowHeight/2.8);

    text("your touch (Sometimes might show invert controls 😛)",windowWidth/18,windowHeight/2.5);

    fill(102, 161, 66);
    text("And same goes for PC (if touch screen) . Along with it (In PC) use UP👆🏻 DOWN👇🏻 keys to move and RIGHT👉🏻 key to  ",windowWidth/18,windowHeight/1.85);

    text("accelerate . And Yes ! Use the SPACE key for 'Horn'🔊 (Just For Enjoyment 😄😄) !! ",windowWidth/18,windowHeight/1.72);

    fill(42, 139, 181);
    textSize(25);
    text("Show off your skills and cover the highest distance !!",windowWidth/4.2,windowHeight/1.5);

    text("Meet you at the finish line  !!",windowWidth/2.8,windowHeight/1.39);

    text("Good Luck !!",windowWidth/2.4,windowHeight/1.3);


















    // textSize(20);
    // text("1. You are Max , who is riding a bicycle in a bicycle marathon race .", 30, 80);
    // text("2. Don't collide with other competitors or the obstacles in way like cones , pits  ", 30, 110);
    // text("or metallic fences .", 50, 140);
    // text("3. Collect the energy drink in your way otherwise Max will get dehydrated and ", 30, 170);
    // text("4. Use the arrow keys :- up🔼 down🔽 and right▶ to move and accelerate   ", 30, 230);
    // text("respectively .   Press  ' space '  - Horn",50,257)
    // text("5. Show off your skills and cover the highest distance !!  ", 30, 288);
    // text("Meet you at the finish line  !!", 220, 315);
    // text("Good Luck :)", 280, 340)

    // fill(237, 5, 5);
    // text("will lose the marathon . ", 50, 200);
  }
















  ///////////////////////////////////////////////////////////
  if (gameState === BEFOREPLAY) {
    // textSize(24);
    // text("Welcome To the Cycle Run", 255, 50);

    cyclist.x = windowWidth/10;
    cyclist.y = windowHeight/2;   

    
    cyclist.visible = false;
    energyBar.visible = false;
    gameStart.visible = true;
    gameTitle.visible = true;
    backToBeforePlay.visible = false;
    instruction.visible = true;
    message1.visible = false;


    mobilePhone.visible = true;
    computer.visible = true;


  }else if(gameState!==BEFOREPLAY){
    mobilePhone.visible = false;
    computer.visible = false;
  }








  ///////////////////////////////////////////////////////////  

  //For Play
  if (gameState === PLAY) {

    cyclist.visible =true;
   

    // Calling Functions
    spawnRedObstacle();
    spawnYellowObstacle();
    spawnGreenObstacle();
    spawnObstacle2();
    spawnEnergy();
    touchDetector();

    // Displaying Energy  Bar
    energyBar.visible = true;

    // Making back button and instructions button disappear
    backToBeforePlay.visible = false;
    instruction.visible = false;



    // Displaying Distance Covered
    textSize(17);
    fill(240, 240, 10);
    text("Distance Covered :-", windowWidth/1.5,windowHeight/12)
    distance = distance + Math.round(getFrameRate() / 60.1);
    fill(252, 252, 252);
    text(distance + " m",  windowWidth/1.25,windowHeight/12);


    // Displaying Energy
    //text(energy, 150, 60)
    energy = Math.round(energy - 0.51);

    // Creating a scrolling background
    road.velocityX = -(4 + 2 * distance / 150);
    if (road.x < windowWidth/3) {
      road.x = road.width / 8.1;
    }

//     // Cyclist Movement
    //UP
    if (keyDown("up")) {
      cyclist.y = cyclist.y - 8;
    }


    // Cyclist Movement
    //Down
    if (keyDown("down")) {
      cyclist.y = cyclist.y + 8;
    }


//     // Cyclist Movement
//     //left
//     if (keyDown("left")) {
//      // road.velocityX = road.velocityX +1;
//       //cyclist.x = cyclist.x - 8;
//     }
    
//   // Touch movement
//     // up
//     if((touches.length>0)&&mouseIsOver(upButton)){
//        cyclist.y = cyclist.y-8;
//        touches = []
//     }
    
//     // down
//     if((touches.length>0)&&mouseIsOver(downButton)){
//        cyclist.y = cyclist.y+8;
//        touches = []
//     }
    
    
    

    // Cyclist Movement
    //right
    if (keyDown("right")) {
      road.velocityX = road.velocityX -5.9;
      distance = Math.round(distance + 0.5);
      energy = energy -0.03;
      // redObstacleGroup.setVelocityXEach( - 6.9);
      // redObstacleGroup.velocityX = redObstacleGroup.velocityX - 15;
      // yellowObstacleGroup.velocityX = yellowObstacleGroup.velocityX - 15;
      // greenObstacleGroup.velocityX = greenObstacleGroup.velocityX - 15;
      // obstacle2Group.velocityX = obstacle2Group.velocityX -5.9;
      // energyDrinkGroup.velocityX = energyDrinkGroup.velocityX - 7.5;
      
      message1.x = 350;
      message1.visible = false;
      cyclist.frameDelay = 2;

      //redObstacleGroup.velocityX = redObstacleGroup.velocityX+18;

      redObstacleGroup.setVelocityXEach(-12);
      yellowObstacleGroup.setVelocityXEach(-8.9);
      greenObstacleGroup.setVelocityXEach(-10.11);
      
      obstacle2Group.setVelocityXEach( road.velocityX );
      energyDrinkGroup.setVelocityXEach(road.velocityX);
      
      
      
    }else (cyclist.frameDelay = 4)

    if(keyDown("right")!==true){
      redObstacleGroup.setVelocityXEach(-(6 + 1.1*distance / 300));
      yellowObstacleGroup.setVelocityXEach(-(6.8 + 1.1*distance / 300));
      greenObstacleGroup.setVelocityXEach(-(5.5 + 1.1*distance / 300));
      obstacle2Group.setVelocityXEach(-(4 + 2 * distance / 150));
      energyDrinkGroup.setVelocityXEach(road.velocityX);
      

    }








  }
  //////////////////////////////////////////////////////////// 
  // For end State
  if (gameState === END) {
    road.velocityX = 0;
    obstacle2Group.setVelocityXEach(0);
    obstacle2Group.setLifetimeEach(-1);
    energyDrinkGroup.setVelocityXEach(0);

    message1.x = -400;
    // message1.visible = false;

    // redObstacleGroup.setLifetimeEach(140);
    // yellowObstacleGroup.setLifetimeEach(140);
    // greenObstacleGroup.setLifetimeEach(140);
    energyDrinkGroup.setLifetimeEach(-1);
    changeEndImage();
    bgm.stop();
    restart.visible = true;

    energy = 1400;

    textSize(24);
    fill(240, 194, 10);
    text("You Covered :-",windowWidth/1.6,windowHeight/12);
    fill(7, 176, 149);
    text(distance  +" metres" ,windowWidth/1.3,windowHeight/12);
    fill(240, 194, 10);

    border.visible = false;
    //text(" metres",450,40);
  }

  if (gameState === END) {
    energyBar.changeAnimation("red", change);

  }
  






  ////////////////////////////////////////////

  if (energy <= 350) {
    energyBar.scale = 1.6;
    message1.x = 350;
    message1.visible = true;


  }


  if ((energy <= 0) && plz === 0) {
    plz = 1;
    gameState = END;
   // energyBar.changeAnimation("1", energyBar4Image);
    gaspingSound.play();

    redObstacleGroup.setVelocityXEach(6);
    yellowObstacleGroup.setVelocityXEach(6);
    greenObstacleGroup.setVelocityXEach(6);


    redObstacleGroup.setLifetimeEach(140);
    yellowObstacleGroup.setLifetimeEach(140);
    greenObstacleGroup.setLifetimeEach(140);

    message1.visible = false;
  }

  if (plz === 1) {
    text("You Ran Out of energy !!",windowWidth/2.5, windowHeight/4 );
  }
  //console.log(plz);

  if((energy===1400)&&gameState===END){
    energyBar.changeAnimation("red",change);
  }




  ///////////////////////////////////////////////////////////











}


function spawnRedObstacle() {
  if (frameCount % 200 === 0) {
    redObstacle = createSprite(windowWidth+500, 200, 40, 40);
    redObstacle.x = windowWidth+Math.round(random(50,150));
    redObstacle.y = windowHeight - Math.round(random(50,400));
    redObstacle.addAnimation("RedObstacle", redObstacleImage);
    redObstacle.addImage("redObstacleFallImage", redObstacleFallImage)
    redObstacle.scale = 0.067;
    redObstacle.velocityX = -(6 + 1.1*distance / 300);
    redObstacle.lifetime =windowWidth/7;
    //redObstacle.debug = true;
    redObstacle.setCollider("rectangle", 0, 440, 870, 320);
    
    redObstacleGroup.add(redObstacle);
    
      
    
    
    
    
  x = redObstacle.x;
  y = redObstacle.y;
    
    
    
    
    
  }
   // It's Horn , side please !!
  //  if(keyWentDown("space")&&velocityChanger===0){
  //   redObstacle.velocityY= redObstacle.velocityY - Math.round(random(-5,5));
  //   velocityChanger = 1;

  // }

 
  // if(redObstacle.velocityY >= 5){
  //   redObstacle.velocityY = redObstacle.veloc'[p09xityY+ 0;
  // }



}

function spawnYellowObstacle() {
  if (frameCount % 190 === 0) {
    yellowObstacle = createSprite(windowWidth+500, 200, 40, 40);
    yellowObstacle.x = windowWidth+Math.round(random(50,150));
    yellowObstacle.y =  windowHeight - Math.round(random(50,400))
    yellowObstacle.addAnimation("YellowObstacle", yellowObstacleImage);
    yellowObstacle.addImage("yellowObstacleFallImage", yellowObstacleFallImage)
    yellowObstacle.scale = 0.067;
    yellowObstacle.velocityX = -(6.6 + 1.1*distance / 300);
    yellowObstacleGroup.add(yellowObstacle);
    yellowObstacle.lifetime =windowWidth/7;
   // yellowObstacle.debug = true;
    yellowObstacle.setCollider("rectangle", 0, 420, 1100, 390);

  }
}

function spawnGreenObstacle() {
  if (frameCount % 250 === 0) {
    greenObstacle = createSprite(windowWidth+500, 200, 40, 40);
    greenObstacle.x = windowWidth+Math.round(random(50,150));
    greenObstacle.y =  windowHeight - Math.round(random(50,400))
    greenObstacle.addAnimation("GreenObstacle", greenObstacleImage);
    greenObstacle.addImage("greenObstacleFallImage", greenObstacleFallImage);
    greenObstacle.scale = 0.067;
    greenObstacle.velocityX = -(5.5 + 1.1*distance / 300);
    greenObstacleGroup.add(greenObstacle);
    greenObstacle.lifetime = windowWidth/7;
    //greenObstacle.debug = true;
    greenObstacle.setCollider("rectangle", 0, 410, 990, 360);

  }
}

function spawnObstacle2() {
  if (frameCount % 80 === 10) {
    obstacle2 = createSprite(windowWidth+500, 200, 40, 40);
    obstacle2.x = windowWidth+Math.round(random(50,150));
    obstacle2.y = windowHeight - Math.round(random(50,400))
    obstacle2.velocityX =  -(4 + 2 * distance / 150);
    obstacle2.scale = 0.08;
    obstacle2Group.add(obstacle2);
    obstacle2.lifetime = windowWidth/7;
    // obstacle2.debug = true;
    obstacle2.setCollider("rectangle", 0, 0, 490, 320);

    var randomNumber2 = Math.round(random(1, 3));

    switch (randomNumber2) {
      case 1:
        obstacle2.addImage("obstacle4", otherObstacle1Image)
        break;
      case 2:
        obstacle2.addImage("obstacle5", otherObstacle2Image)
        break;
      case 3:
        obstacle2.addImage("obstacle6", otherObstacle3Image)
        break;
    }



  }

  // Depth Management
  cyclist.depth = obstacle2Group.depth;
  cyclist.depth = cyclist.depth+3;

}

function spawnEnergy() {
  if (frameCount % 450 === 10) {
    energyDrink = createSprite(windowWidth+500, 200, 40, 40);
    energyDrink.x = windowWidth+Math.round(random(50,150));
    energyDrink.y = windowHeight - Math.round(random(50,400))
    energyDrink.addImage(energyDrinkImage);
    energyDrink.velocityX = road.velocityX;
    energyDrink.lifetime = windowWidth/7;
    energyDrinkGroup.add(energyDrink);
    energyDrink.scale = 0.15;
  }

}




function changeEndImage() {
  cyclist.changeAnimation("fall", cyclistFallImage);

}


function touchDetector(){

  if(frameCount % 200 === 0){
    // Creating the touch detecter of the obstacles
  touchDetecter = createSprite(x,y,40,40);

  }

  



}










