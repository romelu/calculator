var isDivisionPerformed = false;
// utility
const STRING_EMPTY = "";
// buttons (operators and operands)
const RCALC_BUTTON = "rcalc-button";
const RCALC_BUTTON_OPERATOR = "rcalc-button-operator";
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
  changeButtonsDisable(RCALC_BUTTON, COLOR_BLACK, true);
  changeButtonsDisable(RCALC_BUTTON_OPERATOR, COLOR_BLACK, true);
}

function changeButtonsDisable(buttonsCssClass, color, disable) {
  var buttonsForDisable = document.getElementsByClassName(buttonsCssClass);
  for (var i = 0; i < buttonsForDisable.length; i++) {
    buttonsForDisable[i].disabled = disable;
    buttonsForDisable[i].style.color = color;
  }
}

// enables buttons (operands and operators)
function enableButtons() {
  changeButtonsEnable(RCALC_BUTTON, COLOR_WHITE, false);
  changeButtonsEnable(RCALC_BUTTON_OPERATOR, COLOR_WHITE, false);
}

function changeButtonsEnable(buttonsCssClass, color, enable) {
  var buttonsForEnable = document.getElementsByClassName(buttonsCssClass);
  for (var i = 0; i < buttonsForEnable.length; i++) {
    buttonsForEnable[i].disabled = enable;
    buttonsForEnable[i].style.color = color;
  }
}