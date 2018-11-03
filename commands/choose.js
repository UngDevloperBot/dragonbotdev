exports.run = (client, message, args) => {
	if (args.length > 0) {
		const choices = args.join(' ').split(';').map((v) => v.trim()).filter(c => c !== '')
    if (choices.length <= 1) return message.channel.send(':question: | You must have more than one choice.')
		message.channel.send(':thinking: │ `' + choices[Math.floor(Math.random() * choices.length)] + '`')
	} else {
		message.channel.send(':question: │ Missing `<choice 1>; <choice 2>; <choice 3>` option.')
	}
}

exports.help = {
  name: 'choose',
  description: 'Have the bot choose one thing over another.',
  usage: 'choose <choice 1>; <choice 2>[; <choice 3>...]',
  fullDesc: 'Have the bot choose one thing over another. The first two choices are required, but you can add as many choices as you want after those.'
}
