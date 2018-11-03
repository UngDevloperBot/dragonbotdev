const discord = require('discord.js')
const snek = require('superagent')

module.exports.run = async (bot, message, args) => {
  message.react("✅")
  let{body} = await snek
  .get(`https://api-to.get-a.life/meme`);

  let memeembed = new discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("meme!🤘")
  .setImage(body.url)
  .setTimestamp() //This sets the timestamp.
  .setFooter(`Requested by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send(memeembed);
    }

