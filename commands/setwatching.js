const Discord = require("discord.js");

module.exports.run = async (client, message, prefix) => {  
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

message.delete(500)

     if (message.author.id !== ('424916247696900135')) return message.channel.send("**You Can\'t Change Watching BOT | **");
     const status = args.join(' ');
     if (status.length === 0) {
       const embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setDescription(`${prefix}setwatching [status]!`);
       message.channel.send({ embed }).then(msg => msg.delete(6000));
       message.delete(500)
  }
  
    else if (status.length !== 0) {
    client.user.setActivity(`${status}`, {  type: "WATCHING"});
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(`${message.author.tag} You Sucessfully Changed Watching » **${status}** !`);
    message.channel.send({ embed }).then(msg => msg.delete(4000));
  }};