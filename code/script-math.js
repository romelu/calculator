var divisionPerformed = false;

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  nameCalculator.nameDisplayMain.value = nameCalculator.nameDisplayMain.value + inputValue;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (divisionPerformed == true && inputValue == 0) {
    var rCalcButton = document.getElementsByClassName("rcalc-button");
    for (var i = 0; i < rCalcButton.length; i++) {
      rCalcButton[i].disabled = true;
      rCalcButton[i].style.color = "black";
      document.getElementById("id-displayInfo").value = "Can not devide by 0! Click C";
    }
  } else {
    divisionPerformed = false;
  }
}

// sets warning, division is in play, boolean used
function setWarning() {
  divisionPerformed = true;
}

// clears both displays, resets boolean, enables buttons
function clearDisplay() {
  divisionPerformed = false;
  document.getElementById("id-displayMain").value = "";
  document.getElementById("id-displayInfo").value = "";
  var rCalcButton = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < rCalcButton.length; i++) {
    rCalcButton[i].disabled = false;
    rCalcButton[i].style.color = "white";
  }
}

function result() {
  var displayMainValue = nameCalculator.nameDisplayMain.value;
  var rCalcButton = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < rCalcButton.length; i++) {
    rCalcButton[i].disabled = true;
    rCalcButton[i].style.color = "black";
  }
  document.getElementById("id-displayInfo").value = "   Invalid entry!    Click C";
  if (displayMainValue) {
    nameCalculator.nameDisplayMain.value = eval(displayMainValue);
    var rCalcButton = document.getElementsByClassName("rcalc-button");
    for (var i = 0; i < rCalcButton.length; i++) {
      rCalcButton[i].disabled = false;
      rCalcButton[i].style.color = "white";
    }
    document.getElementById("id-displayInfo").value = "";
  }
}﻿