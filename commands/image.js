 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#ffc000')
.setTitle("Image Menu :frame_photo:")
.addField("`" + prefix +"Commands`", "**- cat\n\- dog\n\- bunny\n\-\ bird\n\-\ meme\n\- owo\n\-\ memes\n\-\ anime\n\-\ animeme\n\-\ wwe\n\-\ floof\n\-\ coin\n\-\ magik\n\-\ gif\n\-\   pizza**")
.setFooter(`Requested by :${message.author.tag} `) 
.setTimestamp()


message.channel.send(embed);
}

module.exports.help = {
  name: "image"
}