const Discord = require('discord.js');
exports.run = function(client,message){
    var args = message.content.split(" ");
    var argsstr = "";   
    var argi = 0;
    args.forEach(arg => {
                    
        if(argi > 1){
            argsstr += arg + " ";
        }
        argi++;
    });
    const sayembed = new Discord.MessageEmbed()
    
    .setColor('#000000')
    .setTitle('🗣User Message🗣') 
    .setURL("")
    .setAuthor( message.author.tag , message.author.avatarURL,""    )
    .setDescription(argsstr)
    .addField( 'Uptime: ',client.uptime)
    .setTimestamp()
    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
   
message.channel.send(sayembed)
message.delete();

}
