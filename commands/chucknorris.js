const snekfetch = require('snekfetch')

exports.run = (client, msg) => {
  snekfetch.get('http://api.icndb.com/jokes/random?exclude=[explicit]').then((result) => {
    msg.channel.send(result.body.value.joke)
  }).catch((e) => {
    console.log(e)
  })
}

exports.help = {
  name: 'chucknorris',
  description: 'Tells a joke.',
  usage: 'chucknorris',
  fullDesc: 'Tells a joke. Jokes are all Chuck Norris themed.'
}
