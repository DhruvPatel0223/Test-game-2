var BG, BGimg;
var player1;

var player1Health = 300;
var player2Health = 300;
var specialAttack1 = 0;
var specialAttack2 = 0;

var lucarioBlast;

var lastPress = 0;
var basic1 = 0;
var basic2 = 0;

var gameState = "form";

var gameover = "Game Over!";

function preload() {
  BGimg = loadImage("Bg.png");
  bg2img = loadImage("bg2.jpg");
  bgimg3 = loadImage("bgimg3.png");
  lucarioAttack = loadAnimation("lucarioRanged.png");
  lucarioRangedLeft = loadAnimation("lucarioRangedLeft.png");
  lucarioStanding = loadAnimation("LucarioStanding.png");
  lucarioRunning = loadAnimation("LucarioRunning.png");
  lucarioRunningLeft = loadAnimation("LucarioRunningLeft.png");
  lucarioBlastImg = loadAnimation("lucarioBlastImg.png");
  lucarioClose = loadAnimation("lucarioClose.png");
  lucarioCloseLeft = loadAnimation("lucarioCloseLeft.png")

  greninjaRanged = loadAnimation("greninjaRanged.png");
  greninjaRangedRight = loadAnimation("greninjaRangedRight.png");
  greninjaStanding = loadAnimation("greninjaStanding.png");
  greninjaRunning = loadAnimation("greninjaRunning.png");
  greninjaRunningRight = loadAnimation("greninjaRunningRight.png");
  greninjaBlastImg = loadAnimation("greninjaBlast.png");
  greninjaClose = loadAnimation("greninjaClose.png");
  greninjaCloseLeft = loadAnimation("greninjaCloseLeft.png");
}
function setup() {
  createCanvas(1750, 700);
  gameEnd = createSprite(875, 200);
  gameEnd.addImage("game over", bgimg3)
  gameEnd.visible = false;

  player1 = createSprite(590, 160);
  player1.addAnimation("player1", lucarioStanding);
  player1.addAnimation("RunningRight", lucarioRunning);
  player1.addAnimation("RunningLeft", lucarioRunningLeft);
  player1.addAnimation("closeAttack", lucarioClose);
  player1.addAnimation("closeLeft", lucarioCloseLeft);
  player1.addAnimation("rangedRight", lucarioAttack);
  player1.addAnimation("rangedLeft", lucarioRangedLeft);
  player1.scale = 0.10;
  player1.visible = false;

  player2 = createSprite(1160, 160);
  player2.addAnimation("standing", greninjaStanding);
  player2.addAnimation("runningRight", greninjaRunningRight);
  player2.addAnimation("runningLeft", greninjaRunning);
  player2.addAnimation("closeAttack", greninjaClose);
  player2.addAnimation("closeAttackLeft", greninjaCloseLeft);
  player2.addAnimation("ranged", greninjaRanged);
  player2.addAnimation("rangedRight", greninjaRangedRight);
  player2.scale = 0.15;
  player2.visible = false;

  invisibleGround1 = createSprite(590, 220, 245, 10);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(875, 105, 245, 10);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(875, 340, 1080, 10);
  invisibleGround3.visible = false;

  invisibleGround4 = createSprite(1160, 220, 250, 10);
  invisibleGround4.visible = false;

  lucarioBlast = createSprite(0, 0);
  lucarioBlast.addAnimation("blast", lucarioBlastImg);
  lucarioBlast.scale = 0.10;
  lucarioBlast.visible = false;

  greninjaBlast = createSprite(0, 0);
  greninjaBlast.addAnimation("blast2", greninjaBlastImg);
  greninjaBlast.scale = 0.10;
  greninjaBlast.visible = false;
}

function draw() {
  if (gameState === "form") {
    background("white")
    fill("blue");
    textSize(15);
    text("For player 1:", 50, 50)
    text("To move the player left and right use the 'A' and 'D' keys.", 50, 65);
    text("To use your melle abilities, use the 'Q' and 'E' keys.('Q' is to attack to the left and 'E' is to attack to the right)", 50, 80);
    text("To use you special abilities, use the 'W' and 'S' keys.('S' is to attack to the left and 'W' is to attack to the right)", 50, 95);

    fill("red");
    textSize(15);
    text("For player 2:", 950, 50)
    text("To move the player left and right use the 'J' and 'L' keys.", 950, 65);
    text("To use your melle abilities, use the 'U' and 'O' keys.('U' is to attack to the left and 'O' is to attack to the right)", 950, 80);
    text("To use you special abilities, use the 'I' and 'K' keys.('K' is to attack to the left and 'I' is to attack to the right)", 950, 95);

    fill("black");
    textSize(20);
    text("To win you must kill the opponent before they kill you. You can use your special ability when you special attack gouge has reached 100.", 350, 350)
    text("Hit 'ENTER' to play!", 800, 450)

    if (keyDown("ENTER")) {
      gameState = "play";
    }
  }
  if (gameState === "play") {
    background(BGimg);

    player1.visible = true;
    player2.visible = true;

    text("Player1 Health: " + player1Health, 200, 10);
    text("Player2 Health: " + player2Health, 350, 10);

    text("Player1 Special Attack: " + specialAttack1, 200, 25);
    text("player2 Special Attack: " + specialAttack2, 350, 25);

    basic1 = basic1 + Math.round(getFrameRate() / 60);
    basic2 = basic2 + Math.round(getFrameRate() / 60);

    //To move player1 right
    if (keyDown("d")) {
      player1.x = player1.x + 6.5;
      player1.changeAnimation("RunningRight", lucarioRunning);
      player1.scale = 0.15;
    }
    else {
      player1.changeAnimation("player1", lucarioStanding);
      player1.scale = 0.10;
    }
    //To move player1 left
    if (keyDown("a")) {
      player1.x = player1.x - 6.5;
      player1.changeAnimation("RunningLeft", lucarioRunningLeft);
      player1.scale = 0.15;
    }

    //To move player2 right
    if (keyDown("l")) {
      player2.x = player2.x + 6.5;
      player2.changeAnimation("runningRight", greninjaRunningRight);
      player2.scale = 0.15;
    }
    else {
      player2.changeAnimation("standing", greninjaStanding);
      player2.scale = 0.15;
    }
    //To move player2 left
    if (keyDown("j")) {
      player2.x = player2.x - 6.5;
      player2.changeAnimation("runningLeft", greninjaRunning);
      player2.scale = 0.15;
    }

    //To make player1 jump
    if (player1.x <= 590 && keyDown("space") && player1.y >= 220 && player1.x >= 335) {
      player1.velocityY = -12;
    } else if (keyDown("space") && player1.y >= 105 && player1.x <= 1160 && player1.x >= 590) {
      player1.velocityY = -12;
    } else if (player1.x >= 875 && keyDown("space") && player1.y >= 220 && player1.x <= 1420) {
      player1.velocityY = -12;
    }

    //To make player2 jump
    if (player2.x <= 590 && keyDown("shift") && player2.y >= 220 && player2.x >= 335) {
      player2.velocityY = -12;
    } else if (keyDown("shift") && player2.y >= 105 && player2.x <= 1160 && player2.x >= 590) {
      player2.velocityY = -12;
    } else if (player2.x >= 875 && keyDown("shift") && player2.y >= 220 && player2.x <= 1420) {
      player2.velocityY = -12;
    }

    //Player1 Attacks
    if (keyDown("e") && basic1 > 15 && player2.x > player1.x) {
      player1.changeAnimation("closeAttack", lucarioAttack);
      player1.scale = 0.15;
      basic1 = 0;
      if (player1.isTouching(player2) && player2Health >> 0) {
        player2Health = player2Health - 5;
        player2.x = player2.x + 8;
      }
      if (player1.isTouching(player2) && specialAttack1 < 100) {
        specialAttack1 = specialAttack1 + 10;
      }
    }
    if (keyDown("q") && basic1 > 15 && player2.x < player1.x) {
      player1.changeAnimation("closeLeft", lucarioCloseLeft);
      player1.scale = 0.15;
      basic1 = 0;
      if (player1.isTouching(player2) && player2Health >> 0) {
        player2Health = player2Health - 5;
        player2.x = player2.x - 8;
      }
      if (player1.isTouching(player2) && specialAttack1 < 100) {
        specialAttack1 = specialAttack1 + 10;
      }
    }
    if (keyDown("w") && player2Health >> 0 && specialAttack1 === 100) {
      lucarioBlast.x = player1.x;
      lucarioBlast.y = player1.y;
      lucarioBlast.visible = true;
      lucarioBlast.velocityX = 12;
      player1.changeAnimation("rangedRight", lucarioAttack);
      player1.scale = 0.40;
      specialAttack1 = 0;
    } else if (keyDown("s") && player2Health >> 0 && specialAttack1 === 100) {
      lucarioBlast.x = player1.x;
      lucarioBlast.y = player1.y;
      lucarioBlast.visible = true;
      lucarioBlast.velocityX = -12;
      player1.changeAnimation("rangedLeft", lucarioRangedLeft);
      player1.scale = 0.40;
      specialAttack1 = 0;
    }
    if (lucarioBlast.isTouching(player2) && player1.x < player2.x) {
      player2Health = player2Health - 50;
      player2.x = player2.x + 70;
      lucarioBlast.visible = false;
      lucarioBlast.x = 0;
      lucarioBlast.y = 0;
    }
    else if (lucarioBlast.isTouching(player2) && player1.x > player2.x) {
      player2Health = player2Health - 50;
      player2.x = player2.x - 70;
      lucarioBlast.visible = false;
      lucarioBlast.x = 0;
      lucarioBlast.y = 0;
    }

    //Player2 Attacks
    if (keyDown("o") && basic2 > 15 && player1.x > player2.x) {
      player2.changeAnimation("closeAttack", greninjaClose);
      player2.scale = 0.25;
      basic2 = 0;
      if (player2.isTouching(player1) && player1Health >> 0) {
        player1Health = player1Health - 5;
        player1.x = player1.x + 8;
      }
      if (player2.isTouching(player1) && specialAttack2 < 100) {
        specialAttack2 = specialAttack2 + 10;
      }
    }
    if (keyDown("u") && basic2 > 15 && player1.x < player2.x) {
      player2.changeAnimation("closeAttackLeft", greninjaCloseLeft);
      player2.scale = 0.25;
      basic2 = 0;
      if (player2.isTouching(player1) && player1Health >> 0) {
        player1Health = player1Health - 5;
        player1.x = player1.x - 8;
      }
      if (player2.isTouching(player1) && specialAttack2 < 100) {
        specialAttack2 = specialAttack2 + 10;
      }
    }
    if (keyDown("i") && player1Health >> 0 && specialAttack2 === 100) {
      greninjaBlast.x = player2.x;
      greninjaBlast.y = player2.y;
      greninjaBlast.visible = true;
      greninjaBlast.velocityX = 12;
      player2.changeAnimation("rangedRight", greninjaRangedRight);
      player2.scale = 0.06;;
      specialAttack2 = 0;
    } else if (keyDown("k") && player1Health >> 0 && specialAttack2 === 100) {
      greninjaBlast.x = player2.x;
      greninjaBlast.y = player2.y;
      greninjaBlast.visible = true;
      greninjaBlast.velocityX = -12;
      player2.changeAnimation("ranged", greninjaRanged);
      player2.scale = 0.06;
      specialAttack2 = 0;
    }
    if (greninjaBlast.isTouching(player1) && player2.x < player1.x) {
      player1Health = player1Health - 50;
      player1.x = player1.x + 70;
      greninjaBlast.visible = false;
      greninjaBlast.x = 0;
      greninjaBlast.y = 0;
    }
    else if (greninjaBlast.isTouching(player1) && player2.x > player1.x) {
      player1Health = player1Health - 50;
      player1.x = player1.x - 70;
      greninjaBlast.visible = false;
      greninjaBlast.x = 0;
      greninjaBlast.y = 0;
    }

    if (player1Health <= 0 || player1.y > 700) {
      player1.destroy();
      gameEnd.visible = true;
      fill("blue");
      textSize(40);
      text("Player 2 wins!", 200, 550);
      player2.destroy();
    } else if (player2Health <= 0 || player2.y > 700) {
      player1.destroy();
      gameEnd.visible = true;
      fill("red");
      textSize(40);
      text("Player 1 wins!", 200, 550);
      player2.destroy();
    }
  }
  //To add gravity to players
  player1.velocityY = player1.velocityY + 0.8
  player2.velocityY = player2.velocityY + 0.8

  //To keep the players from falling off the world
  player1.collide(invisibleGround1);
  player1.collide(invisibleGround2);
  player1.collide(invisibleGround3);
  player1.collide(invisibleGround4);

  player2.collide(invisibleGround1);
  player2.collide(invisibleGround2);
  player2.collide(invisibleGround3);
  player2.collide(invisibleGround4);

  drawSprites();
}