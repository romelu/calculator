// loader injects js files in to html file
function load(file) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", file);
  document.getElementsByTagName("head")[0].appendChild(src);
}

load("../js/rcalc-math.js")﻿;
load("../js/rcalc-theme.js")﻿;
load("../js/rcalc-size.js");