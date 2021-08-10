/*
const Discord = require('discord.js');
module.exports.run  = function(client,message){
message.reply("The Commands are here: https://pastebin.com/X4sHwT1a");
message.delete();

}
module.exports.help = {
    name:"help"
  }
  */
  const Discord = require('discord.js');
  module.exports.run  = function(client,message){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle('Help')
    .setURL('https://discord.gg/ktsssCvTXR')
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription('Here some commands for you to use')
    .addFields(
      { name: 'b>avatar [member]', value: ' shows the avatar of someone or you in the guild', inline: true },
      { name: 'b>ban [member]', value: 'ban an guild member', inline: true },
      { name: 'b>say [message]', value: 'Say something using the bot(requires manage massages permission)', inline: true },
      { name: 'b>ping', value: 'pong', inline: true },
      { name: 'b>slowmode [number]', value: 'set the slowmode for the channel(0 for none)', inline: true },
      { name: 'b>activity', value: 'play an voice chat activity', inline: true },
      { name: 'b>test', value: 'hello world!', inline: true },
      { name: 'b>punnish', value: 'Currendly disabled', inline: true }, //b>punnish | punnish a user(Requires aditional permissions to use)
      { name: 'b>help', value: 'opens this', inline: true },
      { name: 'b>getmessage [messageid]', value: ' gets a message id(must be internal id)', inline: true },
      { name: 'b>mkchannel [name] [position]', value: 'make channel with a name at a certian position(might be excluded to default to bottom)', inline: true },
      { name: 'b>mkthread [name] ', value: 'make thread with a name', inline: true },
      { name: 'b>rawsay ', value: 'blocked dev command', inline: true },
    )
    .addField('Embed and bot is Copyright © Bloom Sirenix#6090 made for', client.user.username+" running on " + client.guilds.cache.size + " servers with " + client.users.cache.size + " users in total", true)
    .setImage(client.user.avatarURL)
    .setTimestamp()
    .setFooter("executed by "+message.author.username, message.author.avatarURL);
  
  message.channel.send(helpEmbed);
  if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
    message.delete();
    }
  
  }
  module.exports.help = {
      name:"help"
    }
    
