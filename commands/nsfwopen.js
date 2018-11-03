const Discord = require("discord.js")
exports.run = (client, msg, args) => {
if(!msg.channel.nsfw) return(msg.channel.send(`NSFW is not enabled in this channel!`));
if (!msg.channel.nsfwenabled) return( 
    msg.channel.send(`NSFW is enabled in this channel.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 3
};

exports.help = {
  name: "nsfw",
  description: "",
  usage: ""
};