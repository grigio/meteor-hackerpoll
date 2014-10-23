// seeds.js
// se il db è vuoto inserisco dei sondaggi, "meteor reset" per reinizializzare
if (Polls.find({}).count() === 0) {

  Polls.insert({
    question: "Quale linguaggio di programmazione preferisci?",
    answers: ['C', 'Java', 'Ruby','Javascript', 'Python'],
    index: 1
  });

  Polls.insert({
    question: "Che età avete?",
    answers: ['<18', '18-24', '25-34', '35-45','46+'],
    index: 2
  });

  Polls.insert({
    question: "Che OS usate?",
    answers: ['Linux', 'Mac OSX', 'Windows'],
    index: 3
  });

  // voti fake
  _.times(100, function () {
    Votes.insert({poll_id: Random.choice([1,2]), browser_id:Random.id(), answer: Random.choice([0,1,2,3,4]) });
  });

  // default globale: selezionato il primo sondaggio
  AppState.insert({ currentPoll_id: 1 });
}