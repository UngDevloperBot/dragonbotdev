const Discord = require("discord.js");
// const ms = require("ms");

// exports.run = async (bot, message, args) => {

//   if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send("you don't have MUTE_MEMBERS permissions to use this !"); // if author has no perms
//         var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
//         if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
//         if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
//         var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
//         var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
//         var mutereason = mutereason.join(" "); // joins the list kickreason into one line
//         if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
//         // mutedmember.addRole(mutedrole) //if reason, kick
//             .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
//         message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was kicked
//     };

// const Discord = require("discord.js");
// const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have `MANAGE_ROLES` permissions.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("Are you retarted? Why do you wanna mute yourself?")
  if(!tomute) return message.channel.send("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, "Muted");

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#fc6400")
  .addField("User", tomute.user.tag)
  .addField("Moderator",message.author.tag)
  .addField("Reason", `${reason ? reason : "None."}`)
  .setTimestamp();
 message.channel.send("**| That user has been muted.**")
let channel= message.guild.channels.find(`name`, 'mods-log')
if(!channel) return message.channel.send("<**| Please create a mod-log channel!")
  channel.send(Embed)
  }

module.exports.help = {
  name: "mute"
}
