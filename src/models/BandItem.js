var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandItem = Backbone.Model.extend({
  initialize: function() {
  }
});

module.exports = BandItem;