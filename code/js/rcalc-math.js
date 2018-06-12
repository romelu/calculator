var isDivisionPerformed = false;

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  nameCalculator.nameDisplayMain.value = nameCalculator.nameDisplayMain.value + inputValue;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (isDivisionPerformed && inputValue == NUMBER_ZERO) {
    disableButtons();
    document.getElementById(ID_DISPLAY_INFO).value = $.i18n(MESSAGE_ERROR_DIVISION_BY_ZERO);
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

// evaluates cotent of main display
function evaluateDisplay() {
  var valueInserted = nameCalculator.nameDisplayMain.value;
  disableButtons();
  document.getElementById(ID_DISPLAY_INFO).value = $.i18n(MESSAGE_ERROR_INVALID_ENTRY);
  if (valueInserted) {
    var result = eval(valueInserted);
    if (result == undefined) {
      disableButtons();
      document.getElementById(ID_DISPLAY_INFO).value = $.i18n(MESSAGE_ERROR_INVALID_ENTRY);
    } else {
      nameCalculator.nameDisplayMain.value = result;
      enableButtons();
      document.getElementById(ID_DISPLAY_INFO).value = STRING_EMPTY;
    }
  }﻿
}

// disables buttons (operands and operators)
function disableButtons() {
  changeButtonsDisabled(RCALC_BUTTON, COLOR_BLACK, true);
  changeButtonsDisabled(RCALC_BUTTON_OPERATOR, COLOR_BLACK, true);
}
// enables buttons (operands and operators)
function enableButtons() {
  changeButtonsDisabled(RCALC_BUTTON, COLOR_WHITE, false);
  changeButtonsDisabled(RCALC_BUTTON_OPERATOR, COLOR_WHITE, false);
}

// loops trough buttons and makes an action
function changeButtonsDisabled(buttonsCssClass, color, disable) {
  var buttonsForDisable = document.getElementsByClassName(buttonsCssClass);
  for (var i = 0; i < buttonsForDisable.length; i++) {
    buttonsForDisable[i].disabled = disable;
    buttonsForDisable[i].style.color = color;
  }
}