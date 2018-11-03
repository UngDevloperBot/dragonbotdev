const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`d!welcome set #channel\`
- \`d!welcome on\`
- \`d!welcome off\`

`)
              .setFooter("welcome", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
            // if (!message.author.id !== ('424916247696900135')) return;
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
                 if (message.author.id !== ('424916247696900135')) return; 
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = args.slice(0).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./welcome.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome event has been **on**.`)
                .setTimestamp()
                .setFooter("welcome Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome has been **off**.`)
                .setTimestamp()
                .setFooter("welcome Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**WELCOME:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**WELCOME:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

module.exports.help = {
    name: "welcomeimg"
}
