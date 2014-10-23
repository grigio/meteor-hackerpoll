// startup.js

Meteor.startup(function () {
  GAnalytics.pageview();
});

// identifica univocamente il browser utente ed è persistente
localStorage.browser_id = localStorage.browser_id || Meteor.uuid();

// blocco reattivo, viene rieseguito al cambiamento
Deps.autorun(function () {
  var appSub = Meteor.subscribe('app-state');
  if (AppState.findOne()) {
    Session.set('currentPoll_id', AppState.findOne().currentPoll_id);
    var pollsSub = Meteor.subscribe('current-poll', Session.get('currentPoll_id'));
    var votesSub = Meteor.subscribe('votes', Session.get('currentPoll_id'));
    
    $('.loading').hide();

    // .btn attivo se ha già votato
    var selected = Votes.findOne({browser_id:localStorage.browser_id, poll_id:Session.get('currentPoll_id')});
    $('.btn').removeClass('active');
    if (selected) {
        var el = $('.btn[data-id='+selected.poll_id+'-'+selected.answer+']');
        el.addClass('active');
    }
  }
});

// Admin CLI - client
// nella console del browser impostare prima: localStorage.adminKey='segreto'
// dopodiché utilizzare la funzione es. next() per passare al sondaggio successivo
previous = function () {
  Meteor.call('previous', localStorage.adminKey, function (err,res) {
    if (err) console.log(err.message);
  });
}
next = function () {
  Meteor.call('next', localStorage.adminKey, function (err,res) {
    if (err) console.log(err.message);
  });
}
votesReset = function () {
  Meteor.call('votesReset', localStorage.adminKey, function (err,res) {
    var out = err ? err.message : res;
    console.log('Voti eliminati: '+out);
  });
}