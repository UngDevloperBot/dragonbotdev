const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

   var footertext = [`🔹`, `💠`, `🔸`, `🔲`, `▪`, `🎉`, `➡️`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomstar = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 

  
  invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${randomstar} ${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD** 📋`)
        .setColor(`RANDOM`)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp()
        .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
    message.channel.send(embed);
}

module.exports.help = {
    name: "invitestats"
}