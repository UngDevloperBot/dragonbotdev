const Discord = require("discord.js");
const snekfetch = require("snekfetch");
  
  
    module.exports.run = async (bot, message, args) => {
    
            let{body} = await snekfetch
            .get(`https://random.dog/woof.json`);
        
            let dogEmbed = new Discord.RichEmbed()
            .setColor("#bd9a82")
            .setTitle("Dog")
            .setImage(body.url)
            .setFooter("Powered by random.dog")
            .setTimestamp() //This sets the timestamp.
            .setFooter(`| Requested by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
            message.channel.send(dogEmbed);
        }
