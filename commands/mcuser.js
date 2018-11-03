const Discord = require("discord.js")
const got = require("got")
const cheerio = require("cheerio")
const MojangAPI = require("mojang-api")

exports.run = async (bot, message) => {
	const args = message.content.split(" ");
  	
         if (!args[1]) {
  message.channel.send("❌ | Please Include The **Minecraft Username** Too!");
  return;
}
const username = args[1]
async function getShortUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[2];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}

async function getLongUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[1];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}

const shortuuid = await getShortUUID(username);
const longuuid = await getLongUUID(username);
 if (!shortuuid && !longuuid) {
  message.channel.send(`Username **${username}** Is Available To Use!`);
  return; 
 }
 
MojangAPI.nameHistory(`${shortuuid}`, function(err, res) {
	    if (err)
        console.log(err);
            var lastName = res[res.length - 2];
            var lastName2 = res[res.length - 3];
            
            var lastName4 = res[res.length - 5];
            var lastName5 = res[res.length - 6];
            var lastName6 = res[res.length - 7];
            var lastName7 = res[res.length - 8];
            var lastName8 = res[res.length - 9];
	    let micon = (`https://crafatar.com/avatars/${shortuuid}`);
            
         if (!lastName)
         {
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
          }
          if (!lastName2)
         {
         	 var at = new Date(lastName.changedToAt);
           var name1 = lastName.name;
         	 var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
         }
         var lastName3 = res[res.length - 4]; 
         if (!lastName3)
         {
         	  var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
         }
            if (!lastName4)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
         	
            }
            if (!lastName5)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
            if (!lastName6)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
         	var embed = new Discord.RichEmbed()
	  .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
            }
            if (!lastName7)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
            if (!lastName8)
            {
            	            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
            var name7 = lastName7.name;
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
         else {
         	           var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name; 
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name; 
            var name7 = lastName7.name;
            var name8 = lastName8.name; 
         	var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag} | Minecraft User Status`, message.author.displayAvatarURL)
          .addField("🏷 | Username", username)
          .addField("💳 | Short UUID", `\`${shortuuid}\``)
          .addField("💳 | Long UUID", `\`${longuuid}\``)
          .addField("👥 | Skin", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
          .addField("☑️ | Latest Name", `Last Changed To **${username}**!`)
          .setTimestamp()
          .setThumbnail(micon)
          .setColor('GREEN')
          .setFooter(`• Messages For: ${message.author.tag}`)
          return message.channel.send({ embed: embed })
}});
};

exports.help = {
    name: 'mcuser',
    aliases: ['mu', 'mcm'],
    description: 'Shows Minecraft Users Profile!',
    usage: '(p)mcuser [username]'
};