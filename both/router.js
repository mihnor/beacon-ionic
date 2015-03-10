Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', function() {
  this.layout('');
  this.render();
}, {
    name: 'welcome'
    }
);

Router.route('minhas', function() {
    if(!Meteor.userId()) {
        this.redirect('login');
    } else {
        this.render();
    }

}, {
    name: 'myPoesia',
    path: '/minhas/',
    data: function () {
        return Poesias.findOne({"coautor": Meteor.userId()});
    },
    waitOn: function () {
        return Meteor.subscribe('promos');
    }
});

Router.route("/promos", function() {
    this.render();
}, {name: 'promos'});

Router.route("/beacons", function() {
    this.render();
}, {name: 'beacons'});

Router.route('/logout', function() {
  var self = this;
  Meteor.logout(function() {
    self.redirect('welcome');
  });
}, { name: 'logout' });

Router.route("/sobre", function() {
    this.render();
}, {name: 'sobre'});

Router.route("/termos", function() {
    this.render();
}, {name: 'termos'});

Router.route("/politicas", function() {
    this.render();
}, {name: 'politicas'});
