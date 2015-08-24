var ReactRenderer = require('./lib/server');

module.exports = function() {
  return function(app) {
    app._renderer = new ReactRenderer();
  };
};