var lineCounter = NUMBER_UTILITY_CONST.NUMBER_ZERO;

function setLogDisplayLine() {
  lineCounter++;
  var parentDiv = document.getElementById(HTML_ID_CONST.ID_LOG_DISPLAY);
  var paragraph = document.createElement(HTML_ELEMENT_ATTRIBUTE_CONST.ELEMENT_P);
  var text;

  paragraph.style.backgroundColor = HTML_CSS_CONST.COLOR_LIGHT_GREY;
  paragraph.setAttribute(HTML_ELEMENT_ATTRIBUTE_CONST.ATTRIBUTE_CLASS, HTML_CLASS_CONST.RCALC_LOG_DISPLAY_LINE);
  text = document.createTextNode(leftSideOfEqualSignGlobal + STRING_UTILITY_CONST.EQUALS_SIGN + resultGlobal);
  paragraph.appendChild(text);
  parentDiv.insertBefore(paragraph, parentDiv.firstChild);
  parentDiv.removeChild(parentDiv.firstChild.nextSibling);
  changeLineColor(paragraph);
  leftSideOfEqualSignGlobal = resultGlobal;
}

function setDisplayLineErrorCase() {
  var parentDiv = document.getElementById(HTML_ID_CONST.ID_LOG_DISPLAY);
  var paragraph = document.createElement(HTML_ELEMENT_ATTRIBUTE_CONST.ELEMENT_P);
  var text;

  paragraph.style.backgroundColor = HTML_CSS_CONST.COLOR_LIGHT_RED;
  paragraph.setAttribute(HTML_ELEMENT_ATTRIBUTE_CONST.ATTRIBUTE_CLASS, HTML_CLASS_CONST.RCALC_LOG_DISPLAY_LINE);
  text = document.createTextNode(leftSideOfEqualSignGlobal + $.i18n(STRING_KEY_LOCALIZATION_CONST.MESSAGE_ERROR));
  paragraph.appendChild(text);
  parentDiv.insertBefore(paragraph, parentDiv.firstChild);
}

function changeLineColor(paragraph) {
  if (lineCounter % 2 === 1) {
    paragraph.style.backgroundColor = HTML_CSS_CONST.COLOR_WHITE;
  }
}

function clearLog() {
  lineCounter = NUMBER_UTILITY_CONST.NUMBER_ZERO;
  var allChildren = document.getElementById(HTML_ID_CONST.ID_LOG_DISPLAY);

  while (allChildren.firstChild) {
    allChildren.removeChild(allChildren.firstChild);
  }
}

function clearVarLeftSideOfEqualSignGlobal() {
  leftSideOfEqualSignGlobal = STRING_UTILITY_CONST.STRING_EMPTY;
}