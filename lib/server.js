var react = require('react');

/**
 * React renderer
 * @constructor
 */
function ReactRenderer() {
}

ReactRenderer.prototype = {

  /**
   * Render the view as a HTML string
   * @param   {*} view
   * @returns {string}
   */
  toHTML: function(view) {
    return react.renderToStaticMarkup(view);
  }

};

module.exports = ReactRenderer;