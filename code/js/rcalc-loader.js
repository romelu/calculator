// loader injects js files in to the html file <head> tag
function loadJsScript(jsFilePath) {
  var jsScript = document.createElement("script");
  jsScript.setAttribute("type", "text/javascript");
  jsScript.setAttribute("src", jsFilePath);
  document.getElementsByTagName("head")[0].appendChild(jsScript);
}

loadJsScript("../js/rcalc-math.js")﻿;
loadJsScript("../js/rcalc-theme.js")﻿;
loadJsScript("../js/rcalc-size.js");
loadJsScript("../js/constant/rcalc-constant-html-class.js");
loadJsScript("../js/constant/rcalc-constant-html-id.js");
loadJsScript("../js/constant/rcalc-constant-html-css.js");
loadJsScript("../js/constant/rcalc-constant-string-utility.js");
loadJsScript("../js/constant/rcalc-constant-number-utility.js");