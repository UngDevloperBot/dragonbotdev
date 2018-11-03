// const Discord = require("discord.js");
//  const clean = text => {
//   if (typeof(text) === "string")
//     return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
//   else
//       return text;
// }
// module.exports.run = async (bot, message, args) => {
   
   
//      if (message.author.id !== ('424916247696900135')) return message.channel.send("**You Can\'t Use This Command **");
//      try {
//       const code = args.join(" ");
//       let evaled = eval(code);

//       if (typeof evaled !== "string")
//         evaled = require("util").inspect(evaled);

//       message.channel.send(clean(evaled), {code:"xl"});
//     } catch (err) {
//       message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
//     }
  

// };
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '424916247696900135') return message.channel.send(embed);
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

  let embed = new Discord.RichEmbed()
      .setTitle(`Evaluated in ${Math.round(bot.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(bot.token, "Are you retarded?")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}
