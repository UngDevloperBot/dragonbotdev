const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var fuck = ["http://images5.fanpop.com/image/photos/30800000/Fuck-you-anime-30843105-270-256.gif","http://i.imgur.com/ItdrZKi.gif","https://i.pinimg.com/originals/f5/bb/f1/f5bbf1445b067c26d88cbe589d846fd9.gif", "https://i.pinimg.com/originals/05/65/45/0565450075fbb023fa061f4af4916ee6.gif", "https://cloud.lovinmalta.com/images/Queen-Elizabeth-II-Fuck-you-Reaction-gif.gif?mtime=20160825115716",
  "http://www.gifimili.com/gif/2018/02/homer-simpson-doigt-d-honneur.gif","http://chantouvivelavie.c.h.pic.centerblog.net/42a0eb5c.gif", "https://www.tuxboard.com/photos/2016/03/fuck-femme-doigt-dhonneur-1.gif", "http://legeekcestchic.eu/wp-content/uploads/2014/06/le-tumblr-du-jour-dites-le-avec-un-doigt3.gif", "http://static.hitek.fr/img/actualite/25rnq80.gif", "https://dailygeekshow.com/wp-content/uploads/2013/08/22-images-qui-ruineront-vos-souvenirs-denfance-a-tout-jamais22.gif", "https://media.melty.fr/article-3549942-raw/media.gif" ]
 let defineduser = message.mentions.users.first();
  var fucking = fuck [Math.floor(Math.random() * fuck.length)] ;
  if (!defineduser){
  var fuckEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " made a finger to Nitral")
  .setImage(fucking)
  .setTimestamp()
  .setFooter(`Fuck`)
  message.channel.send(fuckEmbed)
  console.log(`${message.author.username} | Fuck`)
  }else{
  var fuckEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " made a finger to "+ defineduser.username )
  .setImage(fucking)
  .setTimestamp()
  .setFooter(`Fuck`)
  message.channel.send(fuckEmbed)
  //console.log(`${message.author.username} | Fuck`)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'fuck',
    description: 'Pour faire un doigt d\'honneur a l\'utilisateur mentionné',
    usage: 'bang [mention]'
  };