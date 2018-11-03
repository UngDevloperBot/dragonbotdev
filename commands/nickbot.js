  

const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
  message.react("✅");
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
 if(!args[0]) {
       const nickbot = new Discord.RichEmbed()
       .setTitle(`__NickName Bot__: **d!nickbot <<nickname>>**`)
      
       return message.channel.send(nickbot).then(msg => msg.delete(8000));
    }
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("**Only player has [MANAGER_NICKNAMES] can change bot nickname!!!**");
  
 let nickname = args.join(' ')
  message.guild.members.get('450933100021809171')
  	.setNickname(nickname);
  await message.channel.send({
  	embed: new Discord.RichEmbed()
      
  		.setTitle(`⭐Changed Server Nickname Dargon bot to **${nickname}**`)
  
  })
}






