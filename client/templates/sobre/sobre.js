Template.sobre.events({
  'click .logout': function() {
    Router.go('logout'); 
  },
});

Template.btnVoltar.events({
  'click .voltar': function() {
    history.back();
  },
});
