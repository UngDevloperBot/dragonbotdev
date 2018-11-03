const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor('LUCKY NUMBER', message.author.avatarURL)
  .addField('And your lucky number is...', ` **${LuckNumber}!**😄`)
  .setTimestamp() 
  .setFooter(` Dragon bot  `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send({embed: numEmb})

}