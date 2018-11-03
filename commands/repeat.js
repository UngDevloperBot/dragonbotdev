const Discord = require("discord.js");

exports.run = async (client, message) => {

            if (!message.guild.voiceConnection) {

                if (!message.member.voiceChannel) return message.channel.send(':x: | Vous devez être dans un salon-vocal !')

                message.member.voiceChannel.join()
            }

            if(!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send(':x: | Il n\'y a pas de musique !');

                let queue = client.fonctions.enqueue(message.guild.id);

                if (queue.length == 0) return message.channel.send(":x: | Il n'y a pas musiques dans la queue !").then(response => { response.delete(5000) });

                 client.fonctions.play(message, queue, queue[0].link)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rp"],
    permLevel: 0
  };
exports.help = {
    name : "repeat",
    usage: "repeat",
    description: "Faire répéter la première musique de la file d'attente"
}