const ytdl = require('ytdl-core');
const Discord = require('discord.js');
module.exports.run  = function(client, message, args){
    var args = message.content.split(" ");
    const streamOptions = { seek: 0, volume: 1 };
    var voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl(args[2], { filter : 'audioonly' });
                const dispatcher = connection.play(stream, streamOptions);
               
                dispatcher.on("end", end => {
                    
                    console.log("left channel");
                    voiceChannel.leave();
                });
               
            }).catch(err => message.reply(err));
            const playembed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('🎶Playing'+ "🎶") 
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL,""    )
            .setDescription('User Request by <@!' + message.author.id + '> ')
            .setThumbnail('https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif')
            .setImage("https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
           
            message.channel.send(playembed)
            message.channel.send(args[2])
            message.delete();
}
module.exports.help = {
    name:"play"
  }
  