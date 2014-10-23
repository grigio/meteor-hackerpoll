// collections.js
Polls = new Meteor.Collection('polls'); // ro
Votes = new Meteor.Collection('votes');
AppState = new Meteor.Collection('app-state'); // ro

if (Meteor.isServer){
  Votes._ensureIndex({poll_id:1, browser_id:1}, {unique: 1});
}

Votes.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return false;
  },
  remove: function (userId, doc) {
    return false;
  }
});

Votes.deny({
  insert: function(userId, doc) {
    doc.createdAt = new Date().valueOf();
    return false;
  }
});