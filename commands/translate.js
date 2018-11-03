const Discord = require("discord.js");
const translate = require("translate");

module.exports.run = async (bot, message, args) => {
    // Define variables
    let fromLang = args[0];
    let toLang = args[1];
    let toTrans = args.slice(2).join(" ");

    // Check if there's a defined lang
    if (!fromLang) {
        message.reply("Please define which language you want to translate from");
    } else {
        if (!toLang) {
            message.reply("Please define a language you want to translate to");
        } else {
            if (!toTrans) {
                message.reply("Please define what you want to get translated");
            } else {
                // Execute code
                let func = await translate(toTrans, {
                    from: `${fromLang}`,
                    engine: "yandex",
                    key: process.env.TRANSLATE_TOKEN,
                    to: `${toLang}`
                });

                let embed = new Discord.RichEmbed()
                    .setTitle("Translation!")
                    .setDescription(`I translated the request from ${fromLang} to ${toLang}`)
                    .addField(`From`, toTrans)
                    .addField(`To`, func)
                    .setColor("#FFFFFF")
                    .setThumbnail("")
                    .setFooter(`Requested by :${message.author.tag} `, bot.user.avatarURL)
                    .setTimestamp();

                message.channel.send(embed);
            }
        }
    }
}

module.exports.help = {
    name: "translate"
}