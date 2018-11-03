 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#ffc000')
.setTitle("NsfW Menu :underage:")
.addField("`" + prefix +"Commands`", "**- pornhub\n\- hentai\n\- gifsex\n\-\ amateur\n\-\ giffuck\n\-\ boobs\n\-\ 4k\n\-\ penis\n\-\ pussy\n\-\ asian\n\-\ ass\n\-\ bbw\n\-\ cosplay\n\-\ discpic\n\-\ public\n\-\ uniform\n\-\ milf\n\-\ ecchi\n\-\ neko\n\-\ porn\n\-\ pawg\n\-\ snapchat\n\-\ sexyfrex\n\-\ gayporn**")
.setFooter(`Requested by :${message.author.tag} `) 
.setTimestamp()


message.channel.send(embed);
}

module.exports.help = {
  name: "nsfw"
}
//  .addField("__NSFW channel__","`pornhub,hentai,gifsex,amateur,giffuck,boobs,4k,pawg,dick,penis,pussy,asian,ass,bbw,cosplay,dicpic,public,uniform,milf`")