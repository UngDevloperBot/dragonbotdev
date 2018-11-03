const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
   message.react("✅");

    let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        ['Users', 'ID']
    ];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Bans', `\`\`\`${table.table(possiblebans)}\`\`\``);
    send(message.channel, embed, {
        name: 'Ban Lists',
        icon: 'http://gaia.adage.com/images/bin/image/x-large/iStock47643841422.jpg'
    });
};

module.exports.help = {
    name: "bans"
}