const ID_PAGE_STYLE = "id-page-style";

// changing the attribute href, which results in changing css file applied
function swapCssFile(theme) {
  document.getElementById(ID_PAGE_STYLE).setAttribute("href", theme);
}

function changeSizeSmall() {
  changeSize("rcalc-button", 20, 30, 30);
  changeSize("rcalc-button-operator", 20, 30, 30);
  changeSize("rcalc-button-clear", 20, 30, 30);
  changeSize("rcalc-display-main", 20, 93, 25);
  changeSize("rcalc-display-info", 10, 125, 25);
}

function changeSizeDefault() {
  changeSize("rcalc-button", 40, 60, 60);
  changeSize("rcalc-button-operator", 40, 60, 60);
  changeSize("rcalc-button-clear", 40, 60, 60);
  changeSize("rcalc-display-main", 40, 186, 55);
  changeSize("rcalc-display-info", 17, 250, 55);
}

function changeSizeLarge() {
  changeSize("rcalc-button", 70, 100, 100);
  changeSize("rcalc-button-operator", 70, 100, 100);
  changeSize("rcalc-button-clear", 70, 100, 100);
  changeSize("rcalc-display-main", 70, 305, 100);
  changeSize("rcalc-display-info", 30, 410, 100);
}

function changeSize(cssClass, fontSize, width, height) {
  var cssClass = document.getElementsByClassName(cssClass);
  for (var i = 0; i < cssClass.length; i++) {
    cssClass[i].style.fontSize = fontSize + "px";
    cssClass[i].style.width = width + "px";
    cssClass[i].style.height = height + "px";
  }
}