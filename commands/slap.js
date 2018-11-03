const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

exports.run = (client, message, prefix) => {
  message.react("✅");
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

        neko.getSFWSlap().then(slap => {
            let slapEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** slaps **${member.user.username}**...`)
                .setImage(slap.url)
                .setFooter('Powered by Dragon')
                .setColor(message.guild.me.displayColor)
                .setTimestamp();
            return message.channel.send({ embed: slapEmbed });
      })
	}