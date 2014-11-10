var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandItem = require('../models/BandItem');

var BandList = Backbone.Collection.extend({
  model: BandItem
});

module.exports = BandList;