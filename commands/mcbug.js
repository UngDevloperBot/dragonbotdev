const { RichEmbed } = require('discord.js');

exports.run = async (client, msg, args) => {
  if(!args[0]) return args.missing(msg, 'No code provided', this.help);
	const fetchMessage = await msg.channel.send('🔎Fetching...');
	try{
		const data = await scraper(client, args[0]);
		
		let page = 0;
		let emb = new RichEmbed()
		.setColor('GREEN')
		.setURL(data.link)
		.setTitle(data.title)
		.setAuthor(data.author.name, data.author.icon)
		.addField('Description', data.description)
		.setFooter(`Powered by bugs.mojang.com (JIRA)`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCub2-Myk7rhqBl39OAJIUEXwhiKFsh9HdGchcddFZyP-90KiLVBjdS4OA');
		data.status === 'Resolved' ? emb.setDescription(`**Status** : Resolved\n**Resolution** : ${data.resolution}`) : emb.setDescription(`**Status** : ${data.status}\n**Vote(s)** : ${data.vote}`);
		if(data.attachments.length < 1) return fetchMessage.edit(emb);
		if(data.attachments.length < 2){
			emb.setImage(data.attachments[0]);
			return fetchMessage.edit(emb)
		}
		emb.setImage(data.attachments[page]);
		fetchMessage.edit(emb).then(async m => {
			await m.react('⬅');
			await m.react('➡');
			const back = m.createReactionCollector((reaction, user) => reaction.emoji.name === '⬅' && user.id === msg.author.id, { time: 600000 }); 
			const next = m.createReactionCollector((reaction, user) => reaction.emoji.name === '➡' && user.id === msg.author.id, { time: 600000 });
			back.on('collect', col => {
				if(page === 0) return;
				page--;
				emb.setImage(data.attachments[page]);
				m.edit(emb);
			});
			next.on('collect', col => {
				if(page === data.attachments.length -1) return;
				page++;
				emb.setImage(data.attachments[page]);
				m.edit(emb);
			});
		});
	}catch(e){
		fetchMessage.edit(`❗No bug found with code \`${args[0]}\``);
	}
};

const { load } = require('cheerio');
async function scraper(client, code){
	try{
		const body = await client.req({url: `https://bugs.mojang.com/browse/${code}`});
		let $ = load(body);
		let arr = [];
		for(let i = 0; i < $('div.attachment-thumb').children().length; i++){
			arr.push('https://bugs.mojang.com' + $('div.attachment-thumb').children()[i].attribs.href)
		}
		
		let obj = {
      link: `https://bugs.mojang.com/browse/${code}`,
			title: $('title').text().trim(),
			author: {
				name : $('span#reporter-val').text().trim(),
				icon : $('span#reporter-val').find('span.aui-avatar-inner').find('img').attr('src')
			},
			status: $('span#status-val.value').children().text().trim(),
			resolution: $('span#resolution-val').text().trim(),
			description: $('div.user-content-block').children().text().trim(),
			vote: $('span#vote-data').text().trim(),
			attachments : arr
		}
		return obj;
	}catch(e){
		return e;
	}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "mcbug",
  description: "Look the detail minecraft bug with given bug Code",
  usage: "mcbug <bugCode>"
};