const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  if(!message.channel.nsfw) return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)
  randomPuppy('porn')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle("Porn NSFW")
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#00000000' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "dog"
}