const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if(args[0] == "help"){
      message.reply(":warning: | Usage: !removerole <user> <role>");
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply(":warning: | Couldn't Find That User, To.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply(":bust_in_silhouette: | Specify a role");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply(":bust_in_silhouette: | Roles Not Found!");
  
    if(!rMember.roles.has(gRole.id)) return message.reply(":warning: | They Don't Have That Role!");
    await(rMember.removeRole(gRole.id));
  
    try{
      await rMember.send(`RIP, You Lost The ${gRole.name} Role!`)
    }catch(e){
      message.channel.send(`RIP To <@${rMember.id}>`)
    }
}

module.exports.help = {
  name: "removerole"
}