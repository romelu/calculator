var set_locale_to = function(locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $('title').i18n();
  $('body').i18n();
};

jQuery(function() {
  $.i18n().load({
    'en': '../js/localization/en.json',
    'cs': '../js/localization/cs.json'
  }).done(function() {
    set_locale_to(url(QUESTION_MARK_LOCALE));

    History.Adapter.bind(window, 'statechange', function() {
      set_locale_to(url(QUESTION_MARK_LOCALE));
    });

    $('.rcalc-dropdown-content-language').on('click', 'a', function(e) {
      e.preventDefault();
      History.pushState(null, null, "?locale=" + $(this).data('locale'));
    });
  });
});