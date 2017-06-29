'use strict'

function startPress() {
  startButton.style.display="none";
  choseColorMenu.style.display="block";
}

function stufShow() {
  speedCounter.style.display="block";
  timeCounter.style.display="block";
  stopButton.style.display="block";
  resetButton.style.display="block";
}

function menuClose() {
  mainMenu.style.display="none";
}

function bluePress() {
  stufShow();
  blueSpiner.style.display="block";
  menuClose();
}

function yellowPress() {
  stufShow();
  yellowSpiner.style.display="block";
  menuClose();
}

function redPress() {
  stufShow();
  redSpiner.style.display="block";
  menuClose();
}


startButton.onclick=startPress;
color_1.onclick=bluePress;
color_2.onclick=yellowPress;
color_3.onclick=redPress;
