 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#ffc000')
.setTitle("Developer Bot Menu :robot:")
.addField("`" + prefix +"Commands`", "**- setplaying\n\- setwatching\n\- setlistening\n\-\ setstreaming\n\-\ leaveserver\n\-\ countserver\n\-\ eval\n\-\ guild\n\-\ guilname\n\-\ guildinvite\n\-\ restart or rst\n\-\ npm**")
.setFooter(`Requested by :${message.author.tag} `) 
.setTimestamp()


message.channel.send(embed);
}

module.exports.help = {
  name: "dev"
}
//setplaying,setwatching,setlistening,setstreaming,leaveserver,countserver,eval,guilname,guildinvite