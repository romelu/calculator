function setLogDisplayLine() {
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  paragraph.style.backgroundColor = "#ffffff";
  var text = document.createTextNode(leftSideOfEqualSignGlobal + "=" + resultGlobal);
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
  var lastChild = parentDiv.lastChild.previousSibling;
  parentDiv.removeChild(lastChild);
}

function setDisplayLineErrorCase(valueInserted) {
  var parentDiv = document.getElementById("id-container-log-display");
  var paragraph = document.createElement("p");
  paragraph.style.backgroundColor = "#f44242";
  var text = document.createTextNode(valueInserted + " ERROR");
  paragraph.appendChild(text);
  parentDiv.appendChild(paragraph);
}