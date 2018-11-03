// const Discord = require("discord.js");
// const ms = require("ms");

// module.exports.run = async (bot, message, args) => {
//     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You don't have the premission to do that!**")

//         let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//         if(!toMute) return message.channel.sendMessage("**Please mention an user or ID to mute.** `ium unmute <user id>`");

//         let role = message.guild.roles.find(r => r.name === "muted")

//         if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user has unmuted Now!");

//         await toMute.removeRole(role);
//         message.channel.sendMessage("The user has been unmuted!");

// }

// module.exports.help = {
//     name: "unmute"
// }


const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("**| You don't have `MANAGE_MEMBERS` permissions.**");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, "Muted");
  
  if(!muterole) return message.channel.send("**| Please create a role named `Muted`.**")
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setTitle("Un-Mute")
  .setColor("#fc6400")
  .addField("User", tomute.user.tag)
  .addField("Moderator", message.author.tag)
  .addField("Reason", `${reason ? reason : "None"}`)
  .setTimestamp()
  message.channel.send("**| That member has been un-muted.**")
let channel= message.guild.channels.find(`name`, 'mods-log')
if(!channel) return message.channel.send("**| Please create a mod-log channel!**")
  channel.send(Embed)

}

module.exports.help = {
  name: "unmute"
}
