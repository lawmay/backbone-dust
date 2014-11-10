var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./router');

$(document).ready(function() {
  var router = new Router();
  router.start();
});