const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


     const List = message.guild.emojis.map(e => e.toString()).join(" ");
        let sicon = message.guild.iconURL;
        const EmojiList = new Discord.RichEmbed() 
            .setTitle('➠ Server Emoji\'s List') 
            .setColor('RANDOM')
            .setAuthor(message.guild.name, sicon)
            .setDescription(List) 
            .setTimestamp() 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList); 
        message.react("📥");
  }