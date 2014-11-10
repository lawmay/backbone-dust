var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandDetailsView = Backbone.View.extend({
  className: 'band-details-container',
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    var currentTemplate = this.model.attributes.id ? 'banddetailsview': 'banddetailsintro';

    dust.render(currentTemplate + '.dust', this.model.attributes, function(err, out) {
      this.$el.html(out);
    }.bind(this));
      
    return this.$el;
  }
});

module.exports = BandDetailsView;