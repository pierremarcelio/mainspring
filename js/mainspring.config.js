(function ($) {

  'use strict';
  // Configuration that should only be ran once globally.
  var init = function () {

    /**
     * Svg4everybody
     */
    svg4everybody();

    /**
     * Dotdotdot
     */
    $('[data-dotdotdot="elipsis"]').dotdotdot({
      watch: "window",
      lastCharacter : {
        /*  Remove these characters from the end of the truncated text. */
        remove    : [ ' ', ',', ';', '.', '!', '?' ],
      },
    });

    // Init accordions.
    $('.m-accordion-item').accordion();

    /**
     * Flickity
     */
    $('[data-carousel=flickity]').flickity();

  };

  try {
    if (Drupal && Drupal.behaviors) {
      Drupal.behaviors.dcConfiguration = {
        attach: function attach(context, settings) {
          init(settings);
        }
      };
    } else {
      init();
    }
  } catch (e) {
    init();
  }
})(jQuery);
