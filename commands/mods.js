 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {
 message.react("✅");
let embed = new Discord.RichEmbed()
.setColor('#16d6e0')
.setTitle("Info Menu :headphones:")
.addField("`" + prefix +"embed`", "Chat with Embed")
.addField("`" + prefix +"say`", "Chat bot")
.addField("`" + prefix +"annsay`", "bot chat to channel name 'announcements'")
.addField("`" + prefix +"kick`", "Kicks the mentioned user. ")
.addField("`" + prefix +"ban`", "	Bans the mentioned user. ")
.addField("`" + prefix +"unban`", "Unbans the user. [Requires id]")
.addField("`" + prefix +"banlist`", "Show the user that Banned")
.addField("`" + prefix +"mute`", "	mute the mentioned user.Need to create role name 'Muted' ")
.addField("`" + prefix +"tempmute`", "tempmute the mentioned user.it have time auto unmute **NOT WORK NOW** ")
.addField("`" + prefix +"unmute`", "Unmute the mentioned user. ")
.addField("`" + prefix +"addrole`", "	Adds a role to mentioned user")
.addField("`" + prefix +"removerole`", "Removes a role to mentioned user")
.addField("`" + prefix +"rolecolor`", "Change color of role.need mentioned that rolename")
.addField("`" + prefix +"nickbot`", "Change nickname of bot")
.addField("`" + prefix +"invitelist`", "Shows invite list")
.setTimestamp() //This sets the timestamp.
.setFooter(`Requested by :${message.author.tag} `) 
 




message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

//embed,say,clear,emojilist,ban,kick,autoplaying,addrole,removerole,rolecolor,nickbot,invitelist