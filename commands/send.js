const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
    message.reply("Usage: $channel <#channel> <text>");
    return;
  }
  let channelName = message.guild.channel(message.mentions.channels.first())
  
  const channel = bot.channels.find('name', channelName)
channel.send('worked')
}
