const Discord = require('discord.js');
exports.run = (client, message, args) => {

let channel = message.mentions.channels.first();
  if (!channel) {
    channel = message.channel;
  }
  
let channelembed = new Discord.RichEmbed()
.setColor ("#15f153") 
.addField ('Channel', `#${channel.name}`, false) 
.addField ('ID', channel.id, false) 
  message.channel.send(channelembed) 
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ch'],
    permLevel: 0
  };

  exports.help = {
    name: 'channel',
    description: 'Donne des informations sur le channel mentionné', 
    usage: 'channel <mention du channel>'
  };