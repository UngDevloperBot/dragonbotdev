const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => {

  message.react("✅")
  var embed = new Discord.RichEmbed()
 .setTitle("**Hey auto playing worked**") //This is the title of the embed.
  .setAuthor(`AutoPlaying Gamer 🎮`, message.author.avatarURL)
 
 .addField("Here are some ex:", "`++++++++ `") //This is basically a pair of a title with content below it. The format of how it is made is how I show it to be.
 .addField("create name role.than put role name **Dragon** high than role playing "," 1-Playing PLAYERUNKNOWN'S BATTLEGROUNDS\n 2-Playing Counter-Strike Global Offensive\n 3-Playing Grand Theft Auto V\n 4-Playing Minecraft \n 5-Playing Fortnite\n 6-Playing Overwatch\n7-Playing Rule Of Survival\n8-Playing DOTA 2\n 9-Playing osu!\n 10-Playing ROBLOX")
 .setColor("#ec139e") //This code selects a random colourfor the embed.
 .setTimestamp() //This sets the timestamp.
 .setFooter(`Requested by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 .setImage("https://cdn.discordapp.com/attachments/452115003659780096/495797012562837508/asaasf.PNG")
 return message.channel.send(embed);
 }
