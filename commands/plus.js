const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
   if(!args[1]) return message.channel.send("**Enter two inputs for me to add.** `d!plus 52 69`");
   if(isNaN(args[0])) return message.channel.send("**Hey commands** `d!plus 52 69`");


    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = parseInt(num1) + parseInt(num2);

   let addEmbed = new Discord.RichEmbed()

   
   .setColor('RANDOM')
   .setTitle(`${args[0]} + ${args[1]} = **${result}**`)
   .setTimestamp()
   message.channel.send(addEmbed);
   message.react("➕");
                     

};
