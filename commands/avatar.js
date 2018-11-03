
const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
 
  
  let user = message.mentions.users.first();
   if(!args[0]) {
       const nickbot = new Discord.RichEmbed()
       .setTitle(`__Avatar__: **d!avatar <@Name>**`)
      
       return message.channel.send(nickbot).then(msg => msg.delete(10000));
    }
  var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: nice`, `${bot.user.username}: 🔥`, `${bot.user.username}: Someone's looking sharp today!`, `${bot.user.username}: oof if i wasn't a bot...`, `${bot.user.username}: looking sexier than a mug`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 

      message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)


    let msg = await message.channel.send('``Generating that sexy avatar...``') //UNNECESSARY BUT COOL.

  let avatarURL = user.avatarURL;

    let avatarEmbed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`${user}\'s avatar`)
        .addField("Avatar location:", `[click here](${avatarURL})`)
        .setImage(avatarURL)
       
        .setFooter(`${randomfooter}`) //FOOTER AND ICON
        .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!

    await message.channel.send(avatarEmbed) //NOW WE GIVE IT SOMETIME TO DO ALL THE CRAZY STUFF ON TOP AND THEN SEND THE EMBED!

    message.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)

    msg.delete(500);
  message.react("✅");
}
module.exports.help = {
    name: "avatar"
}
