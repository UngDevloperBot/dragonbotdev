// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
    
//   if(!message.member.hasPermissions("MANAGE_ROLES")) return message.reply("You do not have permission to do that!");
//   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//   if(!rMember) return message.reply("User not found.");
//   let role = args.join(" ").slice(22);
//   if(!role) return message.reply("Specify a role!");
//   let gRole = message.guild.roles.find(`name`, role);
//   if(!gRole) return message.reply("Role not found.");

//   if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn\'t have that role.");
//   await(rMember.removeRole(gRole.id));

//   await message.channel.send(`**${rMember} deos not have the role, ${gRole.name} anymore!**`)
//   message.delete(800);

// }
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have `MANAGE_ROLES` permissions.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("**| They don't have that role.**");
  await(rMember.removeRole(gRole.id));
  message.channel.send(`RIP, ${rMember} you have lost the ${gRole.name} role!`)
  
}

module.exports.help = {
  name: "removerole"
}