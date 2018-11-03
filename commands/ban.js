// const Discord = require("discord.js");

// module.exports.run = async (bot, message, prefix) => {
 
// message.react("✅");
//   const args = message.content.slice(prefix.length).split(/ +/);
// 	const commandName = args.shift().toLowerCase();
//  if(!args[0]) {
//        const nickbot = new Discord.RichEmbed()
//        .setTitle(`__Ban__: **d!ban <<@Name>>**`)
      
//        return message.channel.send(nickbot).then(msg => msg.delete(8000));
//     }
    
  
//   let logs = message.guild.channels.find("name", "dragonlogs");
//   if(!logs) return message.channel.send("Could not find a logs channel.");

//   //let user = message.mentions.users.first();
//   //if(!user) return message.reply("Please mention a user");

//   let reason = args.join(" ");
//   if(!reason) reason = "No reason given";

//   if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("you don't have BAN_MEMBERS permissions to use this !");
// 	 let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
// 	 if(!bUser) return message.channel.send("Can't find user!");
// 	 let bReason = args.join(" ").slice(22);
// 	 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");
// 	 if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked!");
	  
 
//   message.guild.member(bUser).ban(reason);

//   let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
//   .setTitle("User Banned")
//   .setFooter("User Ban Logs")
//   .setColor("RANDOM")
//   .setTimestamp()
//   .addField("Banned User:", `${bUser}, With ID: ${bUser.id}`)
//   .addField("Reason:", reason)
//   .addField("Moderator:", `${message.author}, With ID: ${message.author.id}`)
//   .addField("Time:", message.createdAt)
//   .addField("Channel:", message.channel)

//   logs.send(logsEmbed);
  
// }
  
  
  
  
  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   message.react("✅");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("Are you retarded? Why do you want to ban yourself?")
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send("Please provide a reason!")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**| You don't have `BAN_MEMBERS` permissons.**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User", bUser.user.tag)
    .addField("Moderator", message.author.tag)
    .addField("Reason", `${bReason ? bReason : "None."}`)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "mods-log");
    if(!incidentchannel) return message.channel.send("**| Can't find `mod-log` channel.**");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("#bc0000")
    .addField("Moderator", message.author.tag)
    .addField("Reason", `${bReason ? bReason : "None."}`)
  message.channel.send("**| That member has been banned.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
  try{bUser.send(embed)}catch(e){message.channel.send("Unable to send message to user.")}

}

module.exports.help = {
  name:"ban"
}
