const Discord = require("discord.js");

exports.run = (client, message, prefix) => {
  
   const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
 let user = message.mentions.users.first();
   if(!args[0]) {
       const nickbot = new Discord.RichEmbed()
       .setTitle(`__Avatar__: **d!annsay <text>**`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    if(args[0] == "help"){
    message.reply("```Create #annoucements first and do k!annsay on the channel you want message sand to #announcements```");
    return;
  }
    let chatchannel = message.guild.channels.find(`name`, "announcements");
    if(!chatchannel) return message.channel.send("you need create channel **#announcements** !");
    message.delete().catch(O_o=>{});
    chatchannel.send(args.join(" "));

   message.delete(10000)
  message.react("✅")
    } 
}
    
    
    
    
    
    
    
    