 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {
 message.react("✅");
let embed = new Discord.RichEmbed()
.setColor('#16d6e0')
.setTitle("Gamestats Menu 🎮")
.addField("`" + prefix +"fortnite`", "show your fortnite stats")
.addField("`" + prefix +"csgo`", "show your CS-GO stats")
.addField("`" + prefix +"battlefield4`", "show your Battlefield 4 stats")
.addField("`" + prefix +"osu`", "show your osu! stat. Use `d!osu <usernaem>`")
.addField("`" + prefix +"steam`", "show stats of game in steam used `d!steam (name of game)`")
.setTimestamp() //This sets the timestamp.
.setFooter(`Requested by :${message.author.tag} `) 
 


message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

//embed,say,clear,emojilist,ban,kick,autoplaying,addrole,removerole,rolecolor,nickbot,invitelist