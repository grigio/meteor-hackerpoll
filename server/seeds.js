// seeds.js
// se il db è vuoto inserisco dei sondaggi, "meteor reset" per reinizializzare
if (Polls.find({}).count() === 0) {

  Polls.insert({
    question: "Che età hai?",
    answers: ['<18', '18-24', '25-34', '35-45','46+'],
    index: 1
  });

  Polls.insert({
    question: "Da dove vieni?",
    answers: ['Torino e cintura', 'Piemonte', 'Italia', 'Europa e oltre'],
    index: 2
  });

  Polls.insert({
    question: "Frequenti altri gruppi tecnici a Torino?",
    answers: ['Spesso','a volte', 'quasi mai'],
    index: 3
  });

  Polls.insert({
    question: "Come hai saputo dell'evento?",
    answers: ['Mailing list - Newsletters','Blog', 'Riviste', 'Meetup', 'Amici', 'Altri eventi'],
    index: 4
  });

  Polls.insert({
    question: "Sono un..",
    answers: ['Web designer', 'Developer', 'Project manager', 'Marketeer', 'Studente','altro'],
    index: 5
  });

  Polls.insert({
    question: "Se sei uno sviluppatore, quanto guadagni netto al mese?",
    answers: ['700-899', '900-1099', '1100-1299', '1300-1499', '1500-1699','1700+'],
    index: 6
  });

  Polls.insert({
    question: "Mi interessa javascript per..",
    answers: ['frontend', 'backend', 'frontend + backend', 'non so'],
    index: 7
  });

  Polls.insert({
    question: "Quale linguaggio di programmazione usi abitualmente? (prepararsi..)",
    answers: ['Java', 'C#', 'Javascript', 'Ruby Python', 'C/C++','non programmo'],
    index: 8
  });

  Polls.insert({
    question: "Cos'é il callback hell?",
    answers: [
    'Una chiamata di funzione che<br> restituisce vuoto',
    'La nidificazione dovuta alla<br> ricorsione dell\'Effetto Antani',
    'Eccessiva nidificazione di<br> funzioni asincrone dovuta a I/O',
    'L\'inferno dovuto al surriscaldamento<br> della CPU dovuto ai cicli infiniti'
    ],
    index: 9
  });

  // voti fake
  _.times(100, function () {
    Votes.insert({poll_id: Random.choice([1,2]), browser_id:Random.id(), answer: Random.choice([0,1,2,3,4]) });
  });

  // default globale: selezionato il primo sondaggio
  AppState.insert({ currentPoll_id: 1 });
}