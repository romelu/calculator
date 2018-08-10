var isDivisionPerformed = false;
var leftSideOfEqualSignGlobal;
var resultGlobal;

// displays numerous inputs (numbers) on the screen
function displayNumber(inputValue) {
  var leftSideOfEqualSign = document.getElementById("id-display-main").value + inputValue;
  document.getElementById("id-display-main").value = leftSideOfEqualSign;
  leftSideOfEqualSignGlobal = leftSideOfEqualSign;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(inputValue) {
  if (isDivisionPerformed && inputValue == NUMBER_UTILITY_CONST.NUMBER_ZERO) {
    disableButtons();
    document.getElementById(HTML_ID_CONST.ID_DISPLAY_INFO).value = $.i18n(STRING_KEY_LOCALIZATION_CONST.MESSAGE_ERROR_DIVISION_BY_ZERO);
    setDisplayLineErrorCase();
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
  document.getElementById(HTML_ID_CONST.ID_DISPLAY_MAIN).value = STRING_UTILITY_CONST.STRING_EMPTY;
  document.getElementById(HTML_ID_CONST.ID_DISPLAY_INFO).value = STRING_UTILITY_CONST.STRING_EMPTY;
  enableButtons();
  leftSideOfEqualSignGlobal = "";
}

// evaluates cotent of main display
function evaluateDisplay() {
  var valueInserted = nameCalculator.nameDisplayMain.value;
  setDisplayLineErrorCase();
  disableButtons();
  document.getElementById(HTML_ID_CONST.ID_DISPLAY_INFO).value = $.i18n(STRING_KEY_LOCALIZATION_CONST.MESSAGE_ERROR_INVALID_ENTRY);
  if (valueInserted) {
    var result = eval(valueInserted);
    if (result === undefined) {
      disableButtons();
      document.getElementById(HTML_ID_CONST.ID_DISPLAY_INFO).value = $.i18n(STRING_KEY_LOCALIZATION_CONST.MESSAGE_ERROR_INVALID_ENTRY);
    } else {
      nameCalculator.nameDisplayMain.value = result;
      resultGlobal = result;
      setLogDisplayLine();
      enableButtons();
      document.getElementById(HTML_ID_CONST.ID_DISPLAY_INFO).value = STRING_UTILITY_CONST.STRING_EMPTY;
    }
  }﻿
}

// disables buttons (operands and operators)
function disableButtons() {
  changeButtonsDisabled(HTML_CLASS_CONST.RCALC_BUTTON, HTML_CSS_CONST.COLOR_BLACK, true);
  changeButtonsDisabled(HTML_CLASS_CONST.RCALC_BUTTON_OPERATOR, HTML_CSS_CONST.COLOR_BLACK, true);
}
// enables buttons (operands and operators)
function enableButtons() {
  changeButtonsDisabled(HTML_CLASS_CONST.RCALC_BUTTON, HTML_CSS_CONST.COLOR_WHITE, false);
  changeButtonsDisabled(HTML_CLASS_CONST.RCALC_BUTTON_OPERATOR, HTML_CSS_CONST.COLOR_WHITE, false);
}

// loops trough buttons and makes an action
function changeButtonsDisabled(buttonsCssClass, color, disable) {
  var buttonsForDisable = document.getElementsByClassName(buttonsCssClass);
  for (var i = 0; i < buttonsForDisable.length; i++) {
    buttonsForDisable[i].disabled = disable;
    buttonsForDisable[i].style.color = color;
  }
}