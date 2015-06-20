## Meteor HackerPoll

![Hackerpoll realtime poll meteor](https://cloud.githubusercontent.com/assets/8074/8266945/8f7cf93a-1749-11e5-976a-49a61253d354.png)
Hackerpoll is a realtime poll with no registration required, ideal for public events questions. It is also useful to identify who answered correctly in the crowd.

### Requirements

MeteorJS

## Set up

### Set your `settings.json`

(In particular, the adminKey)
see: `settings.json.example`

### Custom Polls and answers + reset data

see: server/seeds.js

## Run

```
$ meteor --settings settings.json
```

### Reset data (local)

```
$ meteor reset
```

### Deploy

Use `yourPollName` instead of `hackerpoll`

```
$ meteor deploy hackerpoll.meteor.com --settings settings.json
```

### Reset data (remote on *.meteor.com + redeploy)

```
meteor mongo hackerpoll.meteor.com
production-c:PRIMARY> db.polls.remove({}) && db.votes.remove({})
```

## Usage (as administrator)

- Go to the inspector in the web broser
- Set your secret key the same you have in the settings `localStorage.adminKey='passw0rd'`
- Have fun `next()`, `previous()` poll or `votesReset()`

### Live Demo

http://hackerpoll.meteor.com/

### Licence

(c) 2014 Luigi Maselli - http://grigio.org - MIT http://opensource.org/licenses/MIT