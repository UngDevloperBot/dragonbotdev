const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send('You are not admin.').then(message.delete);
    const rulesEmbed = new Discord.RichEmbed()
    .setColor('#7289DA')
    .setTitle("***Server Rules, (REACTING TO THESE RULES, MEANS YOU ACCEPT THEM!)***")
    .setDescription('1️⃣**No `NSFW` content**.\n This means no pornographic, viruses, links to NSFW discord servers, etc. __Breaking this rule will result in a severe punishment.__\n\n 2️⃣ **No spamming** \n Spamming, Quickchatting(Sending multiple short messages, instead of wrapping it up in one), and Pinging multiple times. __Will result in a mute or worse.__\n\n3️⃣**Innapropriate Language**\n No excessive swearing, racial slurs, instigating, and offending people on purpose. __Breaking this rule will result in a warn, mute, or worse.__\n\n4️⃣**No advertising**\n No advertising other Discord Servers, Programs, Websites, or Services, This includes DM’ing unsolicited invites, or putting an invite as your playing status. __Breaking this rule will result in a warn, mute, or worse.__ \n\n 5️⃣**Please speak in English, not many people undeerstand other languages** \n\n 6️⃣**Stay on topic, in the channel that you are in.**\n This means, do not post memes in #general because it is not meant for that. __Breaking this rule can result in a warn, mute, or worse.__\n\n7️⃣**We do not allow certain actions or behaviors**\n This includes, but are not limited to, toxic behavior, trolling, and harassment. __Breaking this rule can lead to a mute or worse.__')
    message.channel.send(rulesEmbed).then(function (message) {
        message.react("📖")
        }).catch(console.error);
}

