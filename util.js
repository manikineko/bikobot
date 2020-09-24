module.exports.mkembed = function(message,client,Discord,  embedinfo){

    const infoembed = new Discord.MessageEmbed()
                    .setColor(embedinfo.color)
                    .setTitle(embedinfo.title)
                    .setURL(embedinfo.url)
                    .setAuthor( message.author.username, message.author.avatarURL, "")
                    .setDescription(embedinfo.desc)
                    .addField(embedinfo.field,embedinfo.field_desc)
                    .setThumbnail('')
                    .addField( 'Uptime: ',client.uptime)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL);
                    message.channel.send(infoembed)  
}