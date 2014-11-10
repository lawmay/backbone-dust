var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandList = require('../collections/BandList');
var BandItem = require('./BandItem');
var BandDetails = require('./BandDetails');

var App = Backbone.Model.extend({
  initialize: function(bands) {
    this.bandList = new BandList(this.createBandModels(bands)); // create band list
    this.set('bandList', this.bandList);
    
    this.bandDetails = new BandDetails(); // create band details
    this.set('bandDetails', this.bandDetails);
  },
  createBandModels: function(bands) { // create array of band item models to initialize band list (collection)
    var bandModels = [];
    for (var i = 0; i < bands.length; i++) {
      bandModels.push(new BandItem(bands[i]));
    }

    return bandModels;
  },
  changeBandDetails: function(id) {
    if (id) {
      this.bandDetails.set(this.bandList.get(id).attributes);
    } else {
      this.bandDetails.clear().set(this.bandDetails.defaults);
    }
  }
});

module.exports = App;