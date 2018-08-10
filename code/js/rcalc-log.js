var lineCounter = 0;

function setLogDisplayLine() {
  lineCounter++;
  var parentDiv = document.getElementById("id-log-display");
  var paragraph = document.createElement("p");
  var text;
  var nextToFirstChild;
  paragraph.style.backgroundColor = "#adadad";
  paragraph.setAttribute("class", "rcalc-log-display-line");
  text = document.createTextNode(leftSideOfEqualSignGlobal + "=" + resultGlobal);
  paragraph.appendChild(text);
  parentDiv.insertBefore(paragraph, parentDiv.firstChild);
  nextToFirstChild = parentDiv.firstChild.nextSibling;
  parentDiv.removeChild(nextToFirstChild);
  changeLineColor(paragraph);
}

function setDisplayLineErrorCase(leftSideOfEqualSignGlobal) {
  var parentDiv = document.getElementById("id-log-display");
  var paragraph = document.createElement("p");
  var text;
  paragraph.style.backgroundColor = "#ff6666";
  paragraph.setAttribute("class", "rcalc-log-display-line");
  text = document.createTextNode(leftSideOfEqualSignGlobal + "ERROR");
  paragraph.appendChild(text);
  parentDiv.insertBefore(paragraph, parentDiv.firstChild);
}

function changeLineColor(paragraph) {
  if (lineCounter % 2 == 1) {
    paragraph.style.backgroundColor = "#FFFFFF";
  }
}