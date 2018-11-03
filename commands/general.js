 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#f8e536')
.setTitle("General Menu :skull_crossbones:")
.addField("`" + prefix +"avatar`", "Shows avatar of mentioned user")
.addField("`" + prefix +"servericon`", "Shows pic icon of server")
.addField("`" + prefix +"luckynumber`", "Get random number that lucky")
.addField("`" + prefix +"randomcolor`", "Get some Random color")
.addField("`" + prefix +"roll`", "Get roll Number")
.addField("`" + prefix +"createinvite`", "Get New link invite of Server")
.addField("`" + prefix +"quiz`", "get quiz")
.addField("`" + prefix +"plus`", "Plus number ex: **2+2=4**")
.addField("`" + prefix +"translate`", "translate word ex: **d!translate eng thai <text>**")
.setTimestamp() //This sets the timestamp.
.setFooter(`Requested by :${message.author.tag} `) 
message.channel.send(embed);
message.react("✅");
}

module.exports.help = {
  name: "general" 
}

