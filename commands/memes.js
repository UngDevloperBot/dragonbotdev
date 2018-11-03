const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
  message.react("✅")
  if(message.author.bot) return;
  if(message.channel.type !=="text") return;
  
   randomPuppy('memes')
  .then(url => {
                const embed = new Discord.RichEmbed()
                    .setTimestamp()
                    .setImage(url)
                    .setColor(`${message.guild.me.displayHexColor!=='#00000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                     message.channel.send({ embed });
  })
}

module.exports.help = {
  name: "meme"
}
