// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
 
//   if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You don't have premmsions to do that!**");
//   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//   if(!args[0]) return message.channel.send('**Mention a user, and type a role to give to the user.** `d!addrole <@User> <RoleName>`')
//   if(!rMember) return message.channel.send("**User not found.** ` d!addrole <user> <role>`");
//   let role = args.join(" ").slice(22);
//   if(!role) return message.channel.send("**Specify a role!** `d!addrole <user> <role>`");
//   let gRole = message.guild.roles.find(`name`, role);
//   if(!gRole) return message.channel.send("**Role not found.** `d!addrole <user> <role>`");

//   if(rMember.roles.has(gRole.id)) return message.channel.send("This user already has that role.");
//   await(rMember.addRole(gRole.id));

//   message.channel.send(`**${rMember}** has the role **${gRole.name}** now!`)
//   message.delete(800);
// }

// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {
//    message.react("✅");

//   if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("**| You dont have `MANAGE_ROLES` permissions.**");
//   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//   if(!rMember) return message.channel.send("**| That user cannot be found!**");
//   let role = args.join(" ").slice(22);
//   if(!role) return message.channel.send("**| Please specify a role!**");
//   let gRole = message.guild.roles.find(`name`, role);
//   if(!gRole) return message.channel.send("**| Couldn't find that role.**");

//   if(rMember.roles.has(gRole.id)) return message.reply("**| They already have that role.**");
//   await(rMember.addRole(gRole.id));
//   message.channel.send(` ${rMember} has been given the ${gRole.name} role.`).then(msg => msg.delete({timeout: 20000}));
  
// }

// module.exports.help = {
//   name: "addrole"
// }

const Discord = require("discord.js");
const errors = require("../utils/errors.js")

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: $addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}