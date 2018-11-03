const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, msg, args) => {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  if(args.join(" ").toLowerCase().includes("diamond")) rnd = 29;
  if(args.join(" ").toLowerCase().includes("potion")) rnd = 28;
  if(args.join(" ").toLowerCase().includes("heart")) rnd = 8;

  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();

};