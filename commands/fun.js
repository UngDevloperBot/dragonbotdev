 const Discord = require("discord.js");
 const prefix = ("d!")
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#ffc000')
.setTitle("Fun Menu :joy:")
.addField("`" + prefix +"Commands`", "**- pat\n\- cry\n\- bond\n\- gay\n\- fucku\n\-\ slap\n\-\ ship\n\-\ status\n\-\ hug\n\-\ read\n\-\ trump\n\-\ chucknorris\n\-\ dadjoke\n\-\ ascii\n\-\ playdough\n\-\ rps\n\- givecandy\n\- clap\n\- 8ball\n\- 8ball+**")
.setFooter(`Requested by :${message.author.tag} `) 
.setTimestamp()


message.channel.send(embed);
}

module.exports.help = {
  name: "Fun"
}
//  .addField("__Fun__", "`meme,memes,pat,bond,gay,slap,status,hug,read,dadjoke,chucknorris,ascii,playdough,rps`")