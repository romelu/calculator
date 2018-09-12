var collectionOfKeys = [];
var nextToLastCharacter;

document.addEventListener("keyup", function(event) {
  if (event.defaultPrevented) {
    return;
  }

  var key = event.key;
  collectionOfKeys.push(key);

  // next to last char from an array as this is an index we target it by -2
  nextToLastCharacter = collectionOfKeys[collectionOfKeys.length - 2];
  switch (key) {
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_0:
      testZero(key);
      break;
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_1:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_2:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_3:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_4:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_5:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_6:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_7:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_8:
    case STRING_KEY_KEYPRESS_CONST.KEY_NUMBER_9:
    case STRING_KEY_KEYPRESS_CONST.KEY_DOT:
      displayNumber(key);
      break;
    case STRING_KEY_KEYPRESS_CONST.KEY_L:
    case STRING_KEY_KEYPRESS_CONST.KEY_U:
    case STRING_KEY_KEYPRESS_CONST.KEY_I:
      testCharacter(key);
      break;
    case STRING_KEY_KEYPRESS_CONST.KEY_E:
      evaluateDisplay();
      break;
    case STRING_KEY_KEYPRESS_CONST.KEY_C:
      clearDisplay();
      break;
  }
});

function removeExtraCharacter() {
  var displayValue = document.getElementById(HTML_ID_CONST.ID_DISPLAY_MAIN).value;
  displayValue = displayValue.slice(0, -1);
  document.getElementById(HTML_ID_CONST.ID_DISPLAY_MAIN).value = displayValue;
}

function testCharacter(key) {
  if (nextToLastCharacter == "p" && key == "l") {
    displayNumber("+");
  }
  if (nextToLastCharacter == "m" && key == "i") {
    displayNumber("-");
  }
  if (nextToLastCharacter == "m" && key == "u") {
    displayNumber("*");
  }
  if (nextToLastCharacter == "d" && key == "i") {
    displayNumber("/");
    setWarning(key);
    removeExtraCharacter();
  }
}