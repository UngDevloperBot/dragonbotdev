const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
  let embed = new Discord.RichEmbed ()
  .setTitle("** :arrow_right: Vote for Nameless Bot!**")
  .setColor('ORANGE')
  .setURL("https://discordbots.org/bot/450933100021809171/vote");
  message.channel.sendEmbed(embed);
}
