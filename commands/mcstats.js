const Discord = require("discord.js")
const got = require("got")

exports.run = async (bot, message, args) => {
               const server = message.content.split(" ").slice(1).join(" ")
    if (!server) {
        var embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("❌ | Please Include The **IP Address** Too!")
        message.channel.send({ embed: embed })
    }
    const url = await got(`https://api.mcsrvstat.us/1/${server}`, {json: true})
    if (url.body.ip === "") {
        var embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("❌ | Invalid **IP Address**!")
        message.channel.send({ embed: embed })
    }
    var embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Minecraft Server Status`, message.author.displayAvatarURL)
    .setDescription(`On \`${server}\``)
    .addField("🏷 | IP Adress ", `**__${url.body.ip}__**`)
    .addField("🔌 | Port ", `**__${url.body.port}__**`)
    .setTimestamp()
    .setThumbnail("https://cdn.worldvectorlogo.com/logos/minecraft-1.svg")
    .setColor('GREEN')
    .setFooter(`• Messages For: ${message.author.tag}`);
    message.channel.send({ embed: embed })
};

exports.help = {
    name: 'mcstats',
    aliases: ['mcs', 'mcm'],
    description: 'Shows Minecraft Server Status!',
    usage: '(p)mcstats [server ip]'
};