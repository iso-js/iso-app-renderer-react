var Renderer  = require('..');
var Component = require('./component');

var renderer = new Renderer();
var component = new Component();

renderer.attach(component, document.body);