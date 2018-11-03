const Discord = require("discord.js");
exports.run = (client, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();


    let rock2 = ["Paper! I win!", "Scissors! You win!"]
    let rock1 = Math.floor(Math.random() * rock2.length);
  
    let paper2 = ["Rock! You win!", "Scissors! I win!"]
    let paper1 = Math.floor(Math.random() * paper2.length);
  
    let scissors2 = ["Rock! I win!", "Paper! You win!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);
  
  let rock = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", rock2[rock1])
  
  let paper = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", paper2[paper1])
  
  let scissors = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", scissors2[scissors1])
  
  
  if (message.content === "d!rps rock") message.channel.send(rock)
  if (message.content === "d!rps Rock") message.channel.send(rock)
  if (message.content === "d!rps r") message.channel.send(rock)
  
  if (message.content === "d!rps paper") message.channel.send(paper)
  if (message.content === "d!rps Paper") message.channel.send(paper)
  if (message.content === "d!rps p") message.channel.send(paper)
  
  if (message.content === "d!rps scissors") message.channel.send(scissors)
  if (message.content === "d!rps Scissors") message.channel.send(scissors)
  if (message.content === "d!rps s") message.channel.send(scissors)
  
  
  if (message.content === "d!rps") message.channel.send("Options: ``Rock``, ``Paper``, ``Scissors``. *Usage: d!rps <option>*")
  }

//module.exports.help = {
//    name: "rps"
//} if command handler requires //remove //
