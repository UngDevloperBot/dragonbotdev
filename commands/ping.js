const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
    
  var embed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .setThumbnail(bicon)
  .addField("Ping 📍" ,`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`);
  
  return message.channel.send(embed)//.then(msg => msg.delete(15000));

};