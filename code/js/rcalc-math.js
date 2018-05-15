var isDivisionPerformed = false;

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  nameCalculator.nameDisplayMain.value = nameCalculator.nameDisplayMain.value + inputValue;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (isDivisionPerformed && inputValue == 0) {
    var buttonDisable = document.getElementsByClassName("rcalc-button");
    for (var i = 0; i < buttonDisable.length; i++) {
      buttonDisable[i].disabled = true;
      buttonDisable[i].style.color = "black";
      document.getElementById("id-display-info").value = "Can not devide by 0! Click C";
    }
    var buttonDisableOperator = document.getElementsByClassName("rcalc-button-operator");
    for (var i = 0; i < buttonDisableOperator.length; i++) {
      buttonDisableOperator[i].disabled = true;
      buttonDisableOperator[i].style.color = "black";
    }
  } else {
    isDivisionPerformed = false;
  }
  displayNumber(inputValue);
}

// sets warning, division is in play, boolean used
function setWarning(inputValue) {
  isDivisionPerformed = true;
  displayNumber(inputValue);
}

// clears both displays, resets boolean, enables buttons
function clearDisplay() {
  isDivisionPerformed = false;
  document.getElementById("id-display-main").value = "";
  document.getElementById("id-display-info").value = "";
  var buttonEnable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonEnable.length; i++) {
    buttonEnable[i].disabled = false;
    buttonEnable[i].style.color = "white";
  }
  var buttonEnableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonEnableOperator.length; i++) {
    buttonEnableOperator[i].disabled = false;
    buttonEnableOperator[i].style.color = "white";
  }
}

function result() {
  var displayValue = nameCalculator.nameDisplayMain.value;
  var buttonDisable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonDisable.length; i++) {
    buttonDisable[i].disabled = true;
    buttonDisable[i].style.color = "black";
  }
  var buttonDisableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonDisableOperator.length; i++) {
    buttonDisableOperator[i].disabled = true;
    buttonDisableOperator[i].style.color = "black";
  }
  document.getElementById("id-display-info").value = "   Invalid entry!    Click C";
  if (displayValue) {
    nameCalculator.nameDisplayMain.value = eval(displayValue);
    var buttonEnable = document.getElementsByClassName("rcalc-button");
    for (var i = 0; i < buttonEnable.length; i++) {
      buttonEnable[i].disabled = false;
      buttonEnable[i].style.color = "white";
    }
    var buttonEnableOperator = document.getElementsByClassName("rcalc-button-operator");
    for (var i = 0; i < buttonEnableOperator.length; i++) {
      buttonEnableOperator[i].disabled = false;
      buttonEnableOperator[i].style.color = "white";
    }
    document.getElementById("id-display-info").value = "";
  }
}﻿