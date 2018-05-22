const ID_PAGE_STYLE = "id-page-style";

﻿ // changing the attribute href, which results in changing css file applied
function swapCssFile(theme) {
  document.getElementById(ID_PAGE_STYLE).setAttribute("href", theme);
}