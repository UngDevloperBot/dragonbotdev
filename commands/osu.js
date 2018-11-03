const Discord = require('discord.js');

exports.run = (client, msg, args = []) => {
  if(args.length < 1) return args.missing(msg, 'No username provided', this.help);
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setImage(`http://lemmmy.pw/osusig/sig.php?colour=hexc246f2&uname=${encodeURIComponent(args.join(' '))}&pp=1&countryrank&flagshadow&flagstroke&darkheader&darktriangles&opaqueavatar&avatarrounding=4&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
 msg.channel.send({embed}); 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "osu",
  description: 'check your osu statistic',
  usage: "osu <username>"
}