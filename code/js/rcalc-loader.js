// loader injects js files in to the html file <head> tag
function loadScript(jsFilePath) {
  var jsScript = document.createElement("script");
  jsScript.setAttribute("type", "text/javascript");
  jsScript.setAttribute("src", jsFilePath);
  jsScript.async = false;
  document.getElementsByTagName("head")[0].appendChild(jsScript);
}

// jquery 3.3.1
loadScript("../js/ext-libs/jquery/jquery-3.3.1.min.js");

// i18n library supporting localization
loadScript("../js/ext-libs/CLDRPluralRuleParser/CLDRPluralRuleParser.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.messagestore.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.fallbacks.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.language.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.parser.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.emitter.min.js");
loadScript("../js/ext-libs/jquery.i18n/jquery.i18n.emitter.bidi.min.js");

// history library
loadScript("../js/ext-libs/history/jquery.history.min.js");

// url library
loadScript("../js/ext-libs/url/url.min.js");

// rcalc constants
loadScript("../js/constant/rcalc-constant-html-class.js");
loadScript("../js/constant/rcalc-constant-html-id.js");
loadScript("../js/constant/rcalc-constant-html-css.js");
loadScript("../js/constant/rcalc-constant-string-utility.js");
loadScript("../js/constant/rcalc-constant-number-utility.js");
loadScript("../js/constant/rcalc-constant-string-key-localization.js");
loadScript("../js/constant/rcalc-constant-file-path.js");

// rcalc functionalities
loadScript("../js/rcalc-localization.js")﻿;
loadScript("../js/rcalc-math.js")﻿;
loadScript("../js/rcalc-theme.js")﻿;
loadScript("../js/rcalc-size.js");