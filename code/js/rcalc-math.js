var isDivisionPerformed = false;
// utility
const STRING_EMPTY = "";
// ids
const ID_DISPLAY_MAIN = "id-display-main";
const ID_DISPLAY_INFO = "id-display-info";
// colors
const COLOR_BLACK = "black";
const COLOR_WHITE = "white";
// messages
const MESSAGE_ERROR_DIVISION_BY_ZERO = "Can not devide by 0! Click C";
const MESSAGE_ERROR_INVALID_ENTRY = "   Invalid entry!    Click C";

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  nameCalculator.nameDisplayMain.value = nameCalculator.nameDisplayMain.value + inputValue;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (isDivisionPerformed && inputValue == 0) {
    disableButtons();
    document.getElementById(ID_DISPLAY_INFO).value = MESSAGE_ERROR_DIVISION_BY_ZERO;
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
  document.getElementById(ID_DISPLAY_MAIN).value = STRING_EMPTY;
  document.getElementById(ID_DISPLAY_INFO).value = STRING_EMPTY;
  enableButtons();
}

function evaluateDisplay() {
  var valueInserted = nameCalculator.nameDisplayMain.value;
  disableButtons();
  document.getElementById(ID_DISPLAY_INFO).value = MESSAGE_ERROR_INVALID_ENTRY;
  if (valueInserted) {
    nameCalculator.nameDisplayMain.value = eval(valueInserted);
    enableButtons();
    document.getElementById(ID_DISPLAY_INFO).value = STRING_EMPTY;
  }
}﻿

// disables buttons (operands and operators)
function disableButtons() {
  var buttonsDisable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonsDisable.length; i++) {
    buttonsDisable[i].disabled = true;
    buttonsDisable[i].style.color = COLOR_BLACK;
  }
  var buttonsDisableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonsDisableOperator.length; i++) {
    buttonsDisableOperator[i].disabled = true;
    buttonsDisableOperator[i].style.color = COLOR_BLACK;
  }
}

// enables buttons (operands and operators)
function enableButtons() {
  var buttonsEnable = document.getElementsByClassName("rcalc-button");
  for (var i = 0; i < buttonsEnable.length; i++) {
    buttonsEnable[i].disabled = false;
    buttonsEnable[i].style.color = COLOR_WHITE;
  }
  var buttonsEnableOperator = document.getElementsByClassName("rcalc-button-operator");
  for (var i = 0; i < buttonsEnableOperator.length; i++) {
    buttonsEnableOperator[i].disabled = false;
    buttonsEnableOperator[i].style.color = COLOR_WHITE;
  }
}