// changing the attribute href, which results in changing css file applied
function swapCssFile(theme) {
  document.getElementById(HTML_ID_CONST.ID_PAGE_STYLE).setAttribute("href", theme);
}