const { RichEmbed } = require('discord.js');
const number = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣', '🔟'];

exports.run = async (client, msg, args) => {
	const fetchMessage = await msg.channel.send('🔎Fetching...');
	try{
		const data = await scrape(client);
		const emb = new RichEmbed()
		.setColor(client.color)
		.setDescription(data.map((x,d)=> `${number[d]} - [${x.title}](${x.link})`))
		.setFooter('Powered by minecraft.net', 'https://minecraft.net/android-icon-192x192.png');
		fetchMessage.edit(emb);
	}catch(e){
		fetchMessage.edit(`Oh no an error occured \`${e}\``);
	}
};

const { load } = require('cheerio');
async function scrape(client){
	try{
		let arr = [];
		const body = await client.req({url:'https://minecraft.net/en-us/feeds/community-content/rss'});
		let $ = load(body, {xmlMode: true});
		
		$('item').each((i, x) => {
			arr[i] = {};
			arr[i]['title'] = $('item')[i].children[0].children[0].data
			arr[i]['link'] = $('item')[i].children[1].children[0].data
		});
		return arr.splice(0, 10);
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
  name : "mcnet",
  description: "Look newest article in minecraft.net",
  usage: "mcnet"
};