
const Discord = require("discord.js")
const fivem = require("fivem-api")
const request = require("request")

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permissions")

let members = fivem.getServerInfo('185.249.196.235:32012')

let embed = new Discord.RichEmbed()
  .setTitle("Current FiveM Members Online")
  .setDescription(`${members} count`)
  .setColor(`RANDOM`)
message.channel.send(embed)
}
