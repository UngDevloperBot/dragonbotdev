const snekfetch = require('snekfetch')

exports.run = (client, msg) => {
  snekfetch.get('https://icanhazdadjoke.com/', { headers: { 'accept': 'application/json' } }).then((result) => {
    msg.channel.send(result.body.joke)
  }).catch((e) => {
    console.log(e)
  })
}

exports.help = {
  name: 'dadjoke',
  description: 'Tells a joke.',
  usage: 'dadjoke',
  fullDesc: 'Tells a joke. All jokes are dad jokes.'
}
