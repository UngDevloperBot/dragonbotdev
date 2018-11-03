const Discord = require("discord.js");

exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    
    .setDescription(`**Permanent Invite Link**: ${invite}`)
    .setColor("0x86e734") //This code selects a random colour for the embed.
    .setTimestamp() //This sets the timestamp.
    .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
    message.channel.send(embed);
  });
}

exports.help = {
  name: 'createinvite',
}