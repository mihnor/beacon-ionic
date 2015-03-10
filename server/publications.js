Meteor.publish('promos', function () {
  return Poesias.find();
});

Meteor.publish('minhasPromos', function (userId) {
  return Poesias.find({userId: this.userId});
});

//Meteor.publish('poesiasFinalizadas', function () {
//  // Get poesias field at index TOTAL_RODADAS-1 and see if it exists,
//  // so we have a finished POESIA
//  var poesiasField = 'trechos.' + MELAMED_TOTAL_RODADAS-1;
//  return Poesias.find({ poesiasField: { $exists: true } });
//});

Meteor.publish('infoSuperUser', function () {
  if (this.userId) {
    if (Meteor.users.find({SuperUser: true})) {
      return Meteor.users.find({_id: this.userId}, {fields: {'SuperUser': 1}});
    }
  }
});
