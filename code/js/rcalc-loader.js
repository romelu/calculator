// loader injects js files in to the html file <head> tag
function loadJsScript(jsFile) {
  var jsScript = document.createElement("script");
  jsScript.setAttribute("type", "text/javascript");
  jsScript.setAttribute("src", jsFile);
  document.getElementsByTagName("head")[0].appendChild(jsScript);
}

loadJsScript("../js/rcalc-math.js")﻿;
loadJsScript("../js/rcalc-theme.js")﻿;
loadJsScript("../js/rcalc-size.js");
loadJsScript("../js/rcalc-constant-html-class.js");
loadJsScript("../js/rcalc-constant-html-id.js");
loadJsScript("../js/rcalc-constant-string-utility.js");
loadJsScript("../js/rcalc-constant-number-utility.js");