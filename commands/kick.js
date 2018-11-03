

// const Discord = require("discord.js");

// module.exports.run = async (bot, message, prefix) => {
 
// message.react("✅");
//   const args = message.content.slice(prefix.length).split(/ +/);
// 	const commandName = args.shift().toLowerCase();
//  if(!args[0]) {
//        const nickbot = new Discord.RichEmbed()
//        .setTitle(`__Kick__: **d!kick <<@Name>>**`)
      
//        return message.channel.send(nickbot).then(msg => msg.delete(8000));
//     }



// if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("you don't have KICK_MEMBERS permissions to use this !");
//     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!kUser) return message.channel.send("Can't find user!");
//     let kReason = args.join(" ").slice(22);
//     if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("you not have permission to use this !");
//     if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
	  
// 	  let kickEmbed = new Discord.RichEmbed()
// 	  .setColor("#e56b00")
// 	  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
// 	  .addField("Kicked By", `<@${message.author.id}>`)
// 	  .addField("Time", message.createdAt)
// 	  .addField("Reason", kReason);
	 
// 	   let kickChannel = message.guild.channels.find(`name`, "dragonlogs");
// 	   if(!kickChannel) return message.channel.send("Can't find #dragonlogs channel.pls create channel name #dragonlogs");
	
// 	  message.guild.member(kUser).kick(kReason);
// 	  kickChannel.send(kickEmbed);
	  
// 	  return;
 
// }

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: **| You don't have `KICK_MEMBERS` permissions.**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send("Please provide a reason!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("User", `${kUser}`)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", `${kReason ? kReason : "None."}`)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'mods-log');
  if(!kickChannel) return message.channel.send(":x: **| Can't find `mods-log` channel.**");
   let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("User", kUser.user.tag)
  .addField("Moderator", message.author.tag)
  .addField("Time", message.createdAt.toLocaleString())
  .addField("Reason", `${kReason ? kReason : "None."}`);
message.channel.send(" :ballot_box_with_check: **| That member is kicked.**")
kUser.kick(kReason)
kickChannel.send(kickEmbed);
try{kUser.send(embed)}catch(e) {message.channel.send("Unable to send message to user.")}

}

module.exports.help = {
  name: "kick"
}