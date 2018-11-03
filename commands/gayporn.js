const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
      if (message.channel.nsfw === false) return message.reply(":warning: Ten kanał nie służy do tego :).");
    var subreddits = [
        'testingjunk'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
                request.get(url).then(r => {               
                    fs.writeFile(`${randomname}.jpg`)
                    message.channel.send(url).then(d => {
                    })
            })
        })
}