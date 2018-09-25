const LOCALE = "locale";
var chosenLocale;

var set_locale_to = function(locale) {
  if (locale) {
    var currentLocale = locale;
    localStorage.setItem("currentLocaleKey", currentLocale);
    $.i18n().locale = locale;
  }
  $('title').i18n();
  $('body').i18n();
};

chosenLocale = localStorage.getItem("currentLocaleKey");
if (chosenLocale) {
  $.i18n().locale = chosenLocale;
  window.location.hash = STRING_UTILITY_CONST.QUESTION_MARK + LOCALE + STRING_UTILITY_CONST.EQUALS_SIGN + chosenLocale;
}
$('title').i18n();
$('body').i18n();

jQuery(function() {
  $.i18n().load({
    'en': FILE_PATH_CONST.EN_JSON_FILE_PATH,
    'cs': FILE_PATH_CONST.CS_JSON_FILE_PATH
  }).done(function() {
    set_locale_to(url(STRING_UTILITY_CONST.QUESTION_MARK + LOCALE));

    History.Adapter.bind(window, 'statechange', function() {
      set_locale_to(url(STRING_UTILITY_CONST.QUESTION_MARK + LOCALE));
    });

    $(STRING_UTILITY_CONST.DOT + HTML_CLASS_CONST.RCALC_LANGUAGE_SWITCHER_CONTENT).on('click', 'a', function(e) {
      e.preventDefault();
      History.pushState(null, null, STRING_UTILITY_CONST.QUESTION_MARK + LOCALE + STRING_UTILITY_CONST.EQUALS_SIGN + $(this).data(LOCALE));
    });
  });
});