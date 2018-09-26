const CLICK = "click";
const OPEN = "open";
const HEADER_NAV_UL = "header nav ul";

$(document).ready(function() {
  $(STRING_UTILITY_CONST.DOT + HTML_CLASS_CONST.RCALC_NAV_SANDWICH).on(CLICK, function() {
    $(HEADER_NAV_UL).toggleClass(OPEN);
  });
})﻿;