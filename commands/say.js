const Discord = require("discord.js");
const prefix = ("d!")
exports.run = (client, message, ) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !").then(msg => msg.delete(6000));
      
  message.channel.send(args.join(" "));
       message.delete();
    }   
    
    
    
    
    
    
    
    