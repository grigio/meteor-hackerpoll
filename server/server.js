// server.js
Meteor.publish("current-poll", function (id) {
  return Polls.find();
});

Meteor.publish("votes", function (id) {
  return Votes.find({ poll_id: id }, { sort:{createdAt:1} });
});

Meteor.publish("app-state", function () {
  return AppState.find();
});

// Admin CLI - server
var adminKey = 'segretold';
Meteor.methods({
  next: function(key) {
    if (adminKey !== key)
      throw new Meteor.Error(403, "Not authorized - adminKey required");
    return AppState.update({}, {$inc: {currentPoll_id: 1} });
  },
  previous: function(key) {
    if (adminKey !== key)
      throw new Meteor.Error(403, "Not authorized - adminKey required");
    return AppState.update({}, {$inc: {currentPoll_id: -1} });
  },
  votesReset: function(key) {
    if (adminKey !== key)
      throw new Meteor.Error(403, "Not authorized - adminKey required");
    var out = Votes.remove({});
    console.log('Eliminati: '+out);
    return out;
  }
});