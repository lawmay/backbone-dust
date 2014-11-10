var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BandListView = require('./BandListView');
var BandDetailsView = require('./BandDetailsView');

var AppView = Backbone.View.extend({
  className: 'main-container',
  initialize: function() {
    this.bandListView = new BandListView({  // create band list view
      collection: this.model.get('bandList')
    });
    
    this.bandDetailsView = new BandDetailsView({  // create band details view 
      model: this.model.get('bandDetails')
    });
  },
  render: function() {

    dust.render('header.dust', this.model.attributes, function(err, out) {
      this.$el.append(out);
    }.bind(this));

    dust.render('appcontainer.dust', this.model.attributes, function(err, out) {
      var appContainer = $(out);
      appContainer.append(this.bandListView.render());  // render band list view
      appContainer.append(this.bandDetailsView.render()); // render band details view

      this.$el.append(appContainer);
    }.bind(this));

    return this.$el;
  }
});

module.exports = AppView;