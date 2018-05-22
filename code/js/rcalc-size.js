// classes
const RCALC_BUTTON_CLEAR = "rcalc-button-clear";
const RCALC_DISPLAY_MAIN = "rcalc-display-main";
const RCALC_DISPLAY_INFO = "rcalc-display-info";
// size small in px
const FONT_SIZE_SMALL_20_PX = 20;
const FONT_SIZE_SMALL_8_PX = 8;
const WIDTH_SMALL_30_PX = 30;
const WIDTH_SMALL_93_PX = 93;
const WIDTH_SMALL_125_PX = 125;
const HEIGHT_SMALL_30_PX = 30;
const HEIGHT_SMALL_25_PX = 25;
// size default in px
const FONT_SIZE_DEFAULT_40_PX = 40;
const FONT_SIZE_DEFAULT_17_PX = 17;
const WIDTH_DEFAULT_60_PX = 60;
const WIDTH_DEFAULT_186_PX = 186;
const WIDTH_DEFAULT_250_PX = 250;
const HEIGHT_DEFAULT_60_PX = 60;
const HEIGHT_DEFAULT_55_PX = 55;
// size large in px
const FONT_SIZE_LARGE_70_PX = 70;
const FONT_SIZE_LARGE_30_PX = 30;
const WIDTH_LARGE_100_PX = 100;
const WIDTH_LARGE_305_PX = 305;
const WIDTH_LARGE_410_PX = 410;
const HEIGHT_LARGE_100_PX = 100;
// adds to a value px, making it work to change atributes set in px
const SUFFIX_PX = "px";

function changeSizeSmall() {
  changeSize(RCALC_BUTTON, FONT_SIZE_SMALL_20_PX, WIDTH_SMALL_30_PX, HEIGHT_SMALL_30_PX);
  changeSize(RCALC_BUTTON_OPERATOR, FONT_SIZE_SMALL_20_PX, WIDTH_SMALL_30_PX, HEIGHT_SMALL_30_PX);
  changeSize(RCALC_BUTTON_CLEAR, FONT_SIZE_SMALL_20_PX, WIDTH_SMALL_30_PX, HEIGHT_SMALL_30_PX);
  changeSize(RCALC_DISPLAY_MAIN, FONT_SIZE_SMALL_20_PX, WIDTH_SMALL_93_PX, HEIGHT_SMALL_25_PX);
  changeSize(RCALC_DISPLAY_INFO, FONT_SIZE_SMALL_8_PX, WIDTH_SMALL_125_PX, HEIGHT_SMALL_25_PX);
}

function changeSizeDefault() {
  changeSize(RCALC_BUTTON, FONT_SIZE_DEFAULT_40_PX, WIDTH_DEFAULT_60_PX, HEIGHT_DEFAULT_60_PX);
  changeSize(RCALC_BUTTON_OPERATOR, FONT_SIZE_DEFAULT_40_PX, WIDTH_DEFAULT_60_PX, HEIGHT_DEFAULT_60_PX);
  changeSize(RCALC_BUTTON_CLEAR, FONT_SIZE_DEFAULT_40_PX, WIDTH_DEFAULT_60_PX, HEIGHT_DEFAULT_60_PX);
  changeSize(RCALC_DISPLAY_MAIN, FONT_SIZE_DEFAULT_40_PX, WIDTH_DEFAULT_186_PX, HEIGHT_DEFAULT_55_PX);
  changeSize(RCALC_DISPLAY_INFO, FONT_SIZE_DEFAULT_17_PX, WIDTH_DEFAULT_250_PX, HEIGHT_DEFAULT_55_PX);
}

function changeSizeLarge() {
  changeSize(RCALC_BUTTON, FONT_SIZE_LARGE_70_PX, WIDTH_LARGE_100_PX, HEIGHT_LARGE_100_PX);
  changeSize(RCALC_BUTTON_OPERATOR, FONT_SIZE_LARGE_70_PX, WIDTH_LARGE_100_PX, HEIGHT_LARGE_100_PX);
  changeSize(RCALC_BUTTON_CLEAR, FONT_SIZE_LARGE_70_PX, WIDTH_LARGE_100_PX, HEIGHT_LARGE_100_PX);
  changeSize(RCALC_DISPLAY_MAIN, FONT_SIZE_LARGE_70_PX, WIDTH_LARGE_305_PX, HEIGHT_LARGE_100_PX);
  changeSize(RCALC_DISPLAY_INFO, FONT_SIZE_LARGE_30_PX, WIDTH_LARGE_410_PX, HEIGHT_LARGE_100_PX);
}

function changeSize(rcalcCssClass, fontSize, width, height) {
  var buttonsDisplays = document.getElementsByClassName(rcalcCssClass);
  for (var i = 0; i < buttonsDisplays.length; i++) {
    buttonsDisplays[i].style.fontSize = addSuffixPx(fontSize);
    buttonsDisplays[i].style.width = addSuffixPx(width);
    buttonsDisplays[i].style.height = addSuffixPx(height);
  }
}

function addSuffixPx(size) {
  var suffixPxAdded;
  suffixPxAdded = size + SUFFIX_PX;
  return (suffixPxAdded);
}