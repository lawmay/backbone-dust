var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var App = require('./models/App');
var AppView = require('./views/AppView');

var Router = Backbone.Router.extend({
  routes: {
    'artist/:id': 'artist',
    '*path': 'default'
  },
  start: function() {
    Backbone.history.start();
  },
  initialize: function() {
    this.app = new App(data);
    this.appView = new AppView({model: this.app});
    $('body').append(this.appView.render());
  },
  artist: function(id) {
    this.app.changeBandDetails(id);
  },
  default: function(path) {
    this.app.changeBandDetails();
  }
});

module.exports = Router;


var data = [
  {
    "id": 1,
    "name": "The Jimi Hendrix Experience",
    "year_formed": 1966,
    "members": [
      {
        "name": "Jimi Hendrix"
      },
      {
        "name": "Noel Redding"
      },
      {
        "name": "Mitch Mitchell"
      }
    ]
  },
  {
    "id": 2,
    "name": "Led Zeppelin",
    "year_formed": 1968,
    "members": [
      {
        "name": "Robert Plant"
      },
      {
        "name": "Jimmy Page"
      },
      {
        "name": "John Paul Jones"
      },
      {
        "name": "John Bonham"
      }
    ]
  },
  {
    "id": 3,
    "name": "No Use For A Name",
    "year_formed": 1987,
    "members": [
      {
        "name": "Tony Sly"
      },
      {
        "name": "Chris Rest"
      },
      {
        "name": "Matt Riddle"
      },
      {
        "name": "Boz Rivera"
      }
    ]
  },
  {
    "id": 4,
    "name": "Rise Against",
    "year_formed": 1999,
    "members": [
      {
        "name": "Tim McIlrath"
      },
      {
        "name": "Joe Principe"
      },
      {
        "name": "Brandon Barnes"
      },
      {
        "name": "Zach Blair"
      }
    ]
  }
];