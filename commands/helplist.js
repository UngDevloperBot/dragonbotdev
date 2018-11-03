const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let pages = ["Category's", "Information", "Moderation", "Fun Stuff"];
    let pagesinfo = ["Information", "test"]
    let pagesinfo2 = ["Important", "tester"]
    let pagesinfo3 = ["Moderation", "testest"]
    let pagesinfo4 = ["Fun Stuff", "testest"]
    let pagesinfo5 = ["Another", "testestes"]
    let pagesinfo6 = ["A", "testestees"]
    let pagesinfo7 = ["A", "testetsteteysy"]    
    let page = 1;
  
    const embed = new Discord.RichEmbed()
    .setColor("ffffff")
    .setFooter(`Page ${page} of ${pages.length}`, "di")
    .setDescription(pagesinfo[page - 1])
    .addField(pagesinfo2, pagesinfo3)
    .addField(pagesinfo4, pagesinfo5)
    .addField(pagesinfo6, pagesinfo7)
    .setTitle(pages[page - 1])
    .setTimestamp();
  
    await message.author.send(embed).then(async msg => {
      message.delete()
      await msg.react("⏪").then(async r => {
        await msg.react("⏩")

        const backwardsFilter = (reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {
          time: 60000
        });
        
        const forwards = msg.createReactionCollector(forwardsFilter, {
          time: 60000
        });

        backwards.on("collect", r => {
          if (page === 1) return;
          page--;
          embed.setTitle(pages[page - 1]);
          embed.setDescription(pagesinfo[page - 1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed);
        });

        forwards.on("collect", r => {
          if (page === pages.length) return;
          page++;
          embed.setTitle(pages[page - 1]);
          embed.setDescription(pagesinfo[page - 1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed);
        });
        
        
        })
    }).catch(e => console.error(e))
}