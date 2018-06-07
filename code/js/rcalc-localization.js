var set_locale_to = function(locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $('title').i18n();
  $('body').i18n();
};

jQuery(function() {
  $.i18n().load({
    'en': '../js/i18n/en.json',
    'cs': '../js/i18n/cs.json'
  }).done(function() {
    set_locale_to(url('?locale'));

    History.Adapter.bind(window, 'statechange', function() {
      set_locale_to(url('?locale'));
    });

    $('.rcalc-dropdown-content-language').on('click', 'a', function(e) {
      e.preventDefault();
      History.pushState(null, null, "?locale=" + $(this).data('locale'));
    });
  });
});