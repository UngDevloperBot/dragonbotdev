 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#be13ec')
.setTitle("Info Menu :headphones:")
.addField("`" + prefix +"botinfo`", "Shows info about bot.")
.addField("`" + prefix +"myinfo`", "Shows your own info ")
.addField("`" + prefix +"serverinfo`", "Shows info about the server the bot is on. ")
.addField("`" + prefix +"channelinfo`", "Shows info about the channel.")
.addField("`" + prefix +"role`", "Shows all of role that have in server.")
.addField("`" + prefix +"roleinfo`", "Shows info about the role that you mention.")
.addField("`" + prefix +"discordid`", "Shows your own ID")
.addField("`" + prefix +"myname`", "Shows your own Name")
.addField("`" + prefix +"online`", "Shows status Online")
.addField("`" + prefix +"mcskin`", "Shows your skin Minecraft.")
.setTimestamp() //This sets the timestamp.
.setFooter(`Requested by :${message.author.tag} `) 
 
message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

