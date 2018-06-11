const LOCALE = "locale";

var set_locale_to = function(locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $('title').i18n();
  $('body').i18n();
};

jQuery(function() {
  $.i18n().load({
    'en': FILE_PATH_CONST.EN_JSON_FILE_PATH,
    'cs': FILE_PATH_CONST.CS_JSON_FILE_PATH
  }).done(function() {
    set_locale_to(url(QUESTION_MARK + LOCALE));

    History.Adapter.bind(window, 'statechange', function() {
      set_locale_to(url(QUESTION_MARK + LOCALE));
    });

    $(DOT + RCALC_DROPDOWN_CONTENT_LANGUAGE).on('click', 'a', function(e) {
      e.preventDefault();
      History.pushState(null, null, QUESTION_MARK + LOCALE + EQUALS_SIGN + $(this).data(LOCALE));
    });
  });
});