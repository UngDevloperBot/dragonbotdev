const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let replies = ["https://cdn.boob.bot/pawg/5CBA.jpg", "https://cdn.boob.bot/pawg/4A44.jpg", "https://i.imgur.com/JYk7NiJ.png", "https://i.imgur.com/6eMFDyG.png", "https://i.imgur.com/V2MRHzR.png", "https://i.imgur.com/vfPa4ng.jpg", "https://i.imgur.com/M2SlhtV.png", "https://i.imgur.com/pYOGIK8.png", "https://i.imgur.com/oM7kEL5.jpg", "https://i.imgur.com/pQiOFRx.png", "https://i.imgur.com/Raz6EKR.png", "https://i.imgur.com/x1WqJfv.png", "https://i.imgur.com/Czk7YlX.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let pawgembed = new Discord.RichEmbed()
        .setTitle("Here! Take some PAWG's! 🍑")
        .setColor("#FF69B4")
        .setFooter(`Requested by ${message.author.tag} 🍑`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(pawgembed);
};

module.exports.help = {
    name: "pawg",
}