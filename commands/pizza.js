const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Please choose a type of pizza.`)
        .setColor(`RANDOM`)
        .setDescription('We have: `pepperoni`, `cheese`, and `pineapple`');
    message.channel.send({
        embed: ahkEmbed
    })



    const msgs = await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("pepperoni")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Here is your pepperoni pizza! Enjoy :D`)
                .setColor(`RANDOM`)
                .setFooter(`Pizza`)
                .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        } else if (msg.content.startsWith("cheese")) {
            const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Here is your cheese pizza! Enjoy :D`)
                .setColor(`RANDOM`)
                .setFooter(`Pizza`)
                .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
            message.channel.send({
                embed: ahkkkEmbed
            })

        } else if (msg.content.startsWith("pineapple")) {
            async function pineapple() {
                message.channel.send('really? so yes or no')
                const mesgs = await msg.channel.awaitMessages(messg => {
                    if (messg.content.startsWith("yes")) {
                        const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`Here is your pineapple pizza! Enjoy :D`)
                            .setColor(`RANDOM`)
                            .setFooter(`Pizza`)
                            .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
                        message.channel.send({
                            embed: ahkkkkEmbed
                        })
                        return;
                    } else {
                        if (messg.content.startsWith("no")) {
                            message.channel.send('Thanks!')
                            return;
                        }
                    }

                }, {
                    time: 50000
                })
            }
            pineapple()
        }
    }, {
        time: 500000
    })
}

exports.pizza = {}

exports.help = {
    name: 'peetza'

}

    