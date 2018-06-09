var set_locale_to = function(locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $('title').i18n();
  $('body').i18n();
};

jQuery(function() {
  $.i18n().load({
    'en': EN_JSON_FILE_PATH,
    'cs': CS_JSON_FILE_PATH
  }).done(function() {
    set_locale_to(url(QUESTION_MARK_LOCALE));

    History.Adapter.bind(window, 'statechange', function() {
      set_locale_to(url(QUESTION_MARK_LOCALE));
    });

    $(DOT + RCALC_DROPDOWN_CONTENT_LANGUAGE).on('click', 'a', function(e) {
      e.preventDefault();
      History.pushState(null, null, "?locale=" + $(this).data('locale'));
    });
  });
});