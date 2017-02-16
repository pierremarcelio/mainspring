/* globals jQuery */

import _defaults from 'lodash/defaultsDeep';

(($) => {
  // Default options
  const pluginName = 'accordion';
  const dataKey = `plugin_${pluginName}`;

// Private functions.
  /**
   * Click event on an accordion.
   */
  const clickAccordion = (e) => {
    e.preventDefault();
    const $btn = $(e.target);
    const speed = e.data.speed;
    const $accordion = e.data.accordion;
    const $content = e.data.content;
    const state = $accordion.attr('data-accordion-state');

    // If the accordion is closed open it.
    if (state === 'is-closed') {
      $content.velocity('slideDown', {
        duration: speed,
      });

      // Update aria.
      $content.attr('aria-hidden', 'false');
      $btn.attr({
        'aria-expanded': true,
      });
      // Update state.
      $accordion.attr('data-accordion-state', 'is-open');
    } else { // If the accordion is open close it.
      $content
        .velocity('slideUp', {
          duration: speed,
        })
        .attr('aria-hidden', 'true');
      $btn.attr({
        'aria-expanded': false,
      });
      // Set the state to closed.
      $accordion.attr('data-accordion-state', 'is-closed');
    }
  };

// Public functions.
  /**
   * The plugin constructor.
   */
  class AccordionItem {
    constructor(element, options = {}) {
      // If there is not tabs element exit.
      if (element.length === 0) {
        return;
      }

      this.element = element;

      this.options = {
        speed: 200,
      };

      this.init(options);
    }

    /**
     * Initialization
     */
    init(options = {}) {
      // Assign default options, but always allow for overriding
      this.options = _defaults(this.options, options);
      // Local vars
      const speed = this.options.speed;
      const $accordions = this.element;

      let n = 1;
      $accordions.each((i, el) => {
        const $accordion = $(el);
        // Add starting accordion state, closed.
        $accordion.attr('data-accordion-state', 'is-closed');
        // label for accordion.
        const $label = $accordion.find('[data-accordion-component=label]');
        // Add aria.
        const collapseN = `collapsible-${n}`;
        $label.attr({
          'aria-expanded': false,
          'aria-controls': collapseN,
          tabindex: '0',
          role: 'button',
        });

        // Content for accordion.
        const $content = $accordion.find('[data-accordion-component=content]');
        // Add aria/
        $content.attr({
          id: collapseN,
          role: 'region',
          'aria-hidden': true,
          'data-accordion-state': 'is-closed',
        });

        $label.on('click', {
          accordion: $accordion,
          content: $content,
          speed, // auto assigns var speed as 'speed' param
        }, clickAccordion);

        n += 1;
      });
    }

    /**
     * Remove the accordions javascript.
     */
    destroy() {
      const $accordions = this.element;

      $accordions.each((i, el) => {
        const $accordion = $(el);
        $accordion.removeAttr('data-accordion-state');
        // label for accordion.
        const $label = $accordion.find('[data-accordion-component=label]');
        $label.removeAttr('aria-expanded aria-controls tabindex role');
        // Content for accordion.
        const $content = $accordion.find('[data-accordion-component=content]');
        $content.removeAttr('id role aria-hidden data-accordion-state style');
        // Unbind clickAccordion event.
        $label.off('click', clickAccordion);
      });

      this.element.removeData(dataKey);
    }
  }

  /*
   * Plugin wrapper, preventing against multiple instantiations and
   * return plugin instance.
   */
  $.fn[pluginName] = function accordion(options = {}) {
    let plugin = this.data(dataKey);

    // has plugin instantiated ?
    if (plugin instanceof AccordionItem) {
      // if have options arguments, call plugin.init() again
      if (typeof options !== 'undefined') {
        plugin.init(options);
      }
    } else {
      plugin = new AccordionItem(this, options);
      this.data(dataKey, plugin);
    }

    return plugin;
  };
})(jQuery);
