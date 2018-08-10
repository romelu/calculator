var lineCounter = 0;

function setLogDisplayLine() {
  lineCounter++;
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  var text;
  var nextToLastChild;
  paragraph.style.backgroundColor = "#adadad";
  paragraph.setAttribute("class", "rcalc-log-display-line");
  text = document.createTextNode(leftSideOfEqualSignGlobal + "=" + resultGlobal);
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
  nextToLastChild = parentDiv.lastChild.previousSibling;
  parentDiv.removeChild(nextToLastChild);
  changeLineColor(paragraph);
}

function setDisplayLineErrorCase(leftSideOfEqualSignGlobal) {
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  var text;
  paragraph.style.backgroundColor = "#ff6666";
  paragraph.setAttribute("class", "rcalc-log-display-line");
  text = document.createTextNode(leftSideOfEqualSignGlobal + " ERROR");
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
}

function changeLineColor(paragraph) {
  if (lineCounter % 2 == 1) {
    paragraph.style.backgroundColor = "#ffffff";
  }
}