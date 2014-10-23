// poll.js
Template.poll.helpers({
  poll: function() {
    return Polls.findOne({index: Session.get('currentPoll_id')});
  },
  votes: function() {
    return Votes.find({ poll_id: Session.get('currentPoll_id') });
  },
  totalVotes: function () {
    return Votes.find({}).count();
  },
  answerCounter: function () {
    return  Votes.find({ poll_id: Session.get('currentPoll_id'), answer: this.key}).count();
  },
  answerCounterPerc: function () {
    var perc = Votes.find({ poll_id: Session.get('currentPoll_id'),
                           answer: this.key}).count() /
              Votes.find({ poll_id: Session.get('currentPoll_id') }).count() * 100;
    return Math.round( perc *10)/10;
  },
  color: function(answer) {
    return getColor(answer);
  },
  selected: function () {
    var res = this.browser_id === localStorage.browser_id;
    return res;
  }
});

Template.poll.events({
  'click .js-increment-btn':function(event) {
    Votes.insert({poll_id: Session.get('currentPoll_id'),
                  browser_id: localStorage.browser_id,
                  answer: this.key});
  }
});