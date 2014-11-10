var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandItemView = require('./BandItemView');

var BandListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'band-list',
  initialize: function() {
  },
  render: function() {
    this.collection.each(function(band, index) {
      this.$el.append(new BandItemView({model: band}).render());
    }, this);

    return this.$el;
  }
});

module.exports = BandListView;