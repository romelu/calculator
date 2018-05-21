const ID_PAGE_STYLE = "id-page-style";
// classes
const RCALC_BUTTON_CLEAR = "rcalc-button-clear";
const RCALC_DISPLAY_MAIN = "rcalc-display-main";
const RCALC_DISPLAY_INFO = "rcalc-display-info";

// changing the attribute href, which results in changing css file applied
function swapCssFile(theme) {
  document.getElementById(ID_PAGE_STYLE).setAttribute("href", theme);
}

function changeSizeSmall() {
  changeSize(RCALC_BUTTON, 20, 30, 30);
  changeSize(RCALC_BUTTON_OPERATOR, 20, 30, 30);
  changeSize(RCALC_BUTTON_CLEAR, 20, 30, 30);
  changeSize(RCALC_DISPLAY_MAIN, 20, 93, 25);
  changeSize(RCALC_DISPLAY_INFO, 8, 125, 25);
}

function changeSizeDefault() {
  changeSize(RCALC_BUTTON, 40, 60, 60);
  changeSize(RCALC_BUTTON_OPERATOR, 40, 60, 60);
  changeSize(RCALC_BUTTON_CLEAR, 40, 60, 60);
  changeSize(RCALC_DISPLAY_MAIN, 40, 186, 55);
  changeSize(RCALC_DISPLAY_INFO, 17, 250, 55);
}

function changeSizeLarge() {
  changeSize(RCALC_BUTTON, 70, 100, 100);
  changeSize(RCALC_BUTTON_OPERATOR, 70, 100, 100);
  changeSize(RCALC_BUTTON_CLEAR, 70, 100, 100);
  changeSize(RCALC_DISPLAY_MAIN, 70, 305, 100);
  changeSize(RCALC_DISPLAY_INFO, 30, 410, 100);
}

function changeSize(rcalcCssClass, fontSize, width, height) {
  var buttonsDisplays = document.getElementsByClassName(rcalcCssClass);
  for (var i = 0; i < buttonsDisplays.length; i++) {
    buttonsDisplays[i].style.fontSize = fontSize + "px";
    buttonsDisplays[i].style.width = width + "px";
    buttonsDisplays[i].style.height = height + "px";
  }
}