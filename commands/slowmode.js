const { Channel } = require("discord.js")

module.exports.run = function(bot,message,args){
    if (!message.member.permissions.has(["MANAGE_CHANNELS"])) return message.channel.send("You can't use this command")
    var time = message.content.split(' ').slice(2).join(' ')
    if (!time) return message.channel.send('Please state a time the slowmode can be')
    message.channel.setRateLimitPerUser(time);
    message.channel.send(`Set the slowmode to : **${time}** seconds`).then(m => m.delete({
        timeout: 2000
    }))
}
module.exports.help = {
    name:"slowmode"
  }
  