const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
//const config = require("botconfig.json");
const youtube = new YouTube('AIzaSyAiXso9DqLY7G6Iey-_9XQXE63NaWMojdg');



module.exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`YouTube search result for ${args}`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor('#ffc1cc') //I personally use bubblegum pink!
          .addField('Title', results[0].title, true)
          .addField('Channel', results[0].channel.title, true)
          .addField('Description', results[0].description)
          .addField('Link', `https://youtu.be/${results[0].id}`);

          message.channel.send(ytEmbed);
      })
      .catch(console.log);

}

module.exports.help = {
  name: "youtube"
}