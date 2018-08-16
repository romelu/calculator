var isSecondPressed = false;
var collectionOfKeys = [];
var nextToLastCharacter;

document.addEventListener("keyup", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  var key = event.key;
  collectionOfKeys.push(key);
  nextToLastCharacter = collectionOfKeys[collectionOfKeys.length - 2];
  switch (key) {
    case "0":
      testZero(key);
      break;
    case "1":
      displayNumber(key);
      break;
    case "2":
      displayNumber(key);
      break;
    case "3":
      displayNumber(key);
      break;
    case "4":
      displayNumber(key);
      break;
    case "5":
      displayNumber(key);
      break;
    case "6":
      displayNumber(key);
      break;
    case "7":
      displayNumber(key);
      break;
    case "8":
      displayNumber(key);
      break;
    case "9":
      displayNumber(key);
      break;
    case ".":
      displayNumber(key);
      break;
    case "p":
      setBoolean();
      break;
    case "l":
      testCharacter(key);
      break;
    case "m":
      setBoolean();
      break;
    case "i":
      testCharacter(key);
      break;
    case "u":
      testCharacter(key);
      break;
    case "d":
      setBoolean();
      break;
    case "i":
      testCharacter(key);
      break;
    case "e":
      evaluateDisplay();
      break;
    case "c":
      clearDisplay();
      break;
  }
});

function removeExtraZero() {
  var diplayValue = document.getElementById("id-display-main").value;
  diplayValue = diplayValue.slice(0, -1);
  document.getElementById("id-display-main").value = diplayValue;
}

function setBoolean() {
  isSecondPressed = true;
}

function testCharacter(key) {
  if (nextToLastCharacter == "p" && key == "l" && isSecondPressed == true) {
    displayNumber("+");
    isSecondPressed = false;
  }
  if (nextToLastCharacter == "m" && key == "i" && isSecondPressed == true) {
    displayNumber("-");
    isSecondPressed = false;
  }
  if (nextToLastCharacter == "m" && key == "u" && isSecondPressed == true) {
    displayNumber("*");
    isSecondPressed = false;
  }
  if (nextToLastCharacter == "d" && key == "i" && isSecondPressed == true) {
    displayNumber("/");
    setWarning(key);
    removeExtraZero();
    isSecondPressed = false;
  } else {
    isSecondPressed = false;
  }
}