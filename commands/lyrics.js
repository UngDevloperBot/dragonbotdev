const Discord = require("discord.js");
const lyr = require('lyrics-fetcher');

module.exports.run = async (bot, message, args) => {
    // let songname = args.join(' ');
    var lyr = require('lyrics-fetcher');
    lyr.fetch(`${args[0]}`, `${args.splice(1, args.length).join(' ')}`, function (err, lyrics) {
        
        const embed = new Discord.RichEmbed()
        .setColor('36393e')
        .setTitle(`Artist: ${args[0]}`)
        .setDescription(`${err || lyrics}`)
        // console.log(err || lyrics);
        message.channel.send(embed)
    });
    

  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: "lyrics",
    description: "",
    usage: ""
  };