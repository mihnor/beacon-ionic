Template.welcome.events({
  'click .btn-ver-beacons': function(e) {
    Router.go('beacons');
  },
  'click .btn-ver-promos': function(e) {
    Router.go('promos');
  },
    'click .btn-facebook': function(e) {

        Meteor.loginWithFacebook({requestPermissions: ['user_friends']}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            Router.go('promos');
        });

    }
});

Template.welcome.rendered = function() {
    IonSideMenu.snapper.disable();
};

Template.welcome.destroyed = function() {
    IonSideMenu.snapper.enable();
};