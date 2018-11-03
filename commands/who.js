exports.run = (client, message, args , ops) => {
  if(!args[0]) return message.channel.send('`Player ID`');
  message.channel.send(`**There you go -> <@${args}>**`)
}
