var lineCounter = 0;

function setLogDisplayLine() {
  lineCounter++;
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  paragraph.style.backgroundColor = "#adadad";
  var text = document.createTextNode(leftSideOfEqualSignGlobal + "=" + resultGlobal);
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
  var nextToLastChild = parentDiv.lastChild.previousSibling;
  parentDiv.removeChild(nextToLastChild);
  changeLineColor(paragraph);
}

function setDisplayLineErrorCase(leftSideOfEqualSignGlobal) {
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  paragraph.style.backgroundColor = "#f44242";
  var text = document.createTextNode(leftSideOfEqualSignGlobal + " ERROR");
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
}

function changeLineColor(paragraph) {
  if (lineCounter % 2 == 1) {
    paragraph.style.backgroundColor = "#ffffff";
  }
}