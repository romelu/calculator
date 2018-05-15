var isDivisionPerformed = false;

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  nameCalculator.nameDisplayMain.value = nameCalculator.nameDisplayMain.value + inputValue;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (isDivisionPerformed && inputValue == 0) {
    disableButtons();
    document.getElementById("id-display-info").value = "Can not devide by 0! Click C";
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
  enableButtons();
}

function evaluateDisplay() {
  var valueInserted = nameCalculator.nameDisplayMain.value;
  disableButtons();
  document.getElementById("id-display-info").value = "   Invalid entry!    Click C";
  if (valueInserted) {
    nameCalculator.nameDisplayMain.value = eval(valueInserted);
    enableButtons();
    document.getElementById("id-display-info").value = "";
  }
}﻿

// disables buttons (operands and operators)
function disableButtons() {
  var buttonsDisable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonsDisable.length; i++) {
    buttonsDisable[i].disabled = true;
    buttonsDisable[i].style.color = "black";
  }
  var buttonsDisableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonsDisableOperator.length; i++) {
    buttonsDisableOperator[i].disabled = true;
    buttonsDisableOperator[i].style.color = "black";
  }
}

// enables buttons (operands and operators)
function enableButtons() {
  var buttonsEnable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonsEnable.length; i++) {
    buttonsEnable[i].disabled = false;
    buttonsEnable[i].style.color = "white";
  }
  var buttonsEnableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonsEnableOperator.length; i++) {
    buttonsEnableOperator[i].disabled = false;
    buttonsEnableOperator[i].style.color = "white";
  }
}