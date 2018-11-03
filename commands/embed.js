const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion **MANAGE MESSAGE** to use this !");   
    let embed = args.join(" ");
    let embedsay = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(embed)
    message.channel.send(embedsay)
    message.delete(100);
  
  }