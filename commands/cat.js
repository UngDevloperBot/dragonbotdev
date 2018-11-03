
const Discord = require("discord.js");
const snekfetch = require("snekfetch")

module.exports.run = async (bot, message, prefix ) => {
     message.react("✅");
 
 let {body} = await snekfetch
  .get(`http://aws.random.cat/meow`);
 let catembed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Cat 🐱")
  .setImage(body.file)
 .setFooter(`Requested by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send(catembed);

}