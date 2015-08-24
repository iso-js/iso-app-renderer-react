var react = require('react');

/**
 * React renderer
 * @constructor
 */
function ReactRenderer() {
}

ReactRenderer.prototype = {

  /**
   * Attach the view to the element and start updating the element when the view changes
   * @param   {Component}   view
   * @param   {HTMLElement} el
   * @returns {ReactRenderer}
   */
  attach: function(view, el) {
    this.view = view;
    this.el   = el;

    if (!view || !el) {
      throw new Error('.attach(): No view or element');
    }

    react.render(this.view, this.el);
    return this;
  },

  /**
   * Detach the view from the element and stop updating the element when the view changes
   * @returns {ReactRenderer}
   */
  detach: function() {

    //check we're attached
    if (this.el) {
      react.unmountComponentAtNode(this.el);
    }

    this.view = null;
    this.el   = null;

    return this;
  }

};

module.exports = ReactRenderer;