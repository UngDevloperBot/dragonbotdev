const Discord = require('discord.js');
exports.run = (client, message) => {

  let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Here are the results of your search: https://play.google.com/store/search?q=" +args.join('+'))
         console.log(`${message.author.username} | play store `)

	}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ps'],
    permLevel: 0
  };

  exports.help = {
    name: 'playsore',
    description: 'Faîte n\'importe qu\'elle recherche sur le playsore facilement',
    usage: 'plastore <recherche>'
  };