const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
 
  
  message.delete(9000)
    if (!['424916247696900135',].includes(message.author.id)) return message.reply(`**You cant do that, only the bot developer can! || do ${prefix}dev** `).then(msg => msg.delete(9000));
    message.channel.send('**Leaveing Server !**')
    message.guild.leave();
  };