const Discord = require("discord.js");

exports.run = (client, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

if (message.author.id !== ('424916247696900135')) return message.channel.send("**You can not use this commands!**");
    
  message.channel.send(args.join(" "));
       message.delete();
    }   
    
    
    
    
    
    
    
    