const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.react("✅")
  var embed = new Discord.RichEmbed()
 .setTitle("Invite Bot ") //This is the title of the embed.
 .setAuthor(`Invite Bot 🤖`, message.author.avatarURL)
 .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/kNyJRV5) «╝ \n• Invite bot          ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=450933100021809171&scope=bot&permissions=2117598463) «╝(^_^)")
 .setColor("0x86e734") //This code selects a random colour for the embed.
 .setTimestamp() //This sets the timestamp.
 .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
 return message.channel.send(embed);
 }
