var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
  },
  render: function() {
    dust.render('banditemview.dust', this.model.attributes, function(err, out) {
      this.$el.append(out);
    }.bind(this));
      
    return this.$el;
  }
});

module.exports = BandItemView;