const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  
        require('request').get('https://api.tfdfurry.com/floof.json', (err, res, body) => {
            message.channel.send(new Discord.RichEmbed()
                                 .setImage('https://' + JSON.parse(body).file))
        });
  
  
};
