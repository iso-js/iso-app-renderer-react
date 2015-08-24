var react = require('react');

module.exports = react.createFactory(react.createClass({
  render: function() {
    return react.createElement('div', {color:"blue"}, ['Hello World!']);
  }
}));