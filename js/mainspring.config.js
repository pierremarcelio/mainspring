/* global jQuery, Drupal */

import _once from 'lodash/once';

(($) => {
  // Configuration that should only be ran once globally.
  const init = _once((settings) => {
    if (settings) {
      // do stuff
    }
    // Init accordions.
    $('.m-accordion-item').accordion();
  });

  try {
    if (Drupal && Drupal.behaviors) {
      Drupal.behaviors.mainspringConfiguration = {
        attach(context, settings) {
          init(settings);
        },
      };
    } else {
      init();
    }
  } catch (e) {
    init();
  }
})(jQuery);
