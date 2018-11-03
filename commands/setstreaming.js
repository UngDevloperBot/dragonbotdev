 const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {  
  message.delete(500)
 if (message.author.id !== ('424916247696900135')) return message.channel.send("**You Can\'t Change streaming BOT  **");
  message.delete()
    let status = args.join(' ');
  if (status.length === 0) {
    let embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Name streaming status!')
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/ungkimyou', type: 1 } });
  let embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: You sucessfully changed streaming status').then(msg => msg.delete(100));
  message.channel.send({ embed });
message.delete(500)
  }};
