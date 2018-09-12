// loader injects js files in to the html file <head> tag
function loadScript(jsFilePath) {
  var jsScript = document.createElement("script");
  jsScript.setAttribute("type", "text/javascript");
  jsScript.setAttribute("src", jsFilePath);
  jsScript.async = false;
  document.getElementsByTagName("head")[0].appendChild(jsScript);
}

// jquery 3.3.1
loadScript("../js/ext-lib/jquery/jquery-3.3.1.min.js");

// i18n library supporting localization
loadScript("../js/ext-lib/CLDRPluralRuleParser/CLDRPluralRuleParser.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.messagestore.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.fallbacks.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.language.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.parser.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.emitter.min.js");
loadScript("../js/ext-lib/jquery.i18n/jquery.i18n.emitter.bidi.min.js");

// history library
loadScript("../js/ext-lib/history/jquery.history.min.js");

// url library
loadScript("../js/ext-lib/url/url.min.js");

// rcalc constants
loadScript("../js/constant/string-key-keypress-constant.js");
loadScript("../js/constant/html-class-constant.js");
loadScript("../js/constant/html-id-constant.js");
loadScript("../js/constant/html-css-constant.js");
loadScript("../js/constant/string-utility-constant.js");
loadScript("../js/constant/number-utility-constant.js");
loadScript("../js/constant/string-key-localization-constant.js");
loadScript("../js/constant/file-path-constant.js");

// rcalc functionalities
loadScript("../js/rcalc-keypress.js")﻿;
loadScript("../js/rcalc-localization.js")﻿;
loadScript("../js/rcalc-math.js")﻿;
loadScript("../js/rcalc-theme.js")﻿;
loadScript("../js/rcalc-size.js");