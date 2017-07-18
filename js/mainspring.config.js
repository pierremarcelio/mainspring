(function ($) {

  'use strict';
  // Configuration that should only be ran once globally.
  var init = function () {

    //svg for everybody (Fixes IE svgs)
    // svg4everybody();

    // Init accordions.
    $('.m-accordion-item').accordion();

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
