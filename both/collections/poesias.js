Promos = new Mongo.Collection('promos');

Promos.helpers({
  total: function() {
    return Promos.find().count();
  }
});

if(Meteor.isServer) {

  if(Promos.find().count() === 0) {
    Promos.insert({
      titulo: 'Lorem Ipsum Titlum',
      coautor: 'Lorem Author Ipsum',
      trechos: [
        {
          autor: 'Lorem Author Ipsum',
          texto: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          createdAt: Date.now(),
        }
      ]
    }); 
  }

}
