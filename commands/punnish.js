const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  /*const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('delmsg')
					.setLabel('❌None❌')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomId('ban')
					.setLabel('⛔Ban a User⛔')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomId('kick')
					.setLabel('👞Kick a User👞')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('lockchannel')
					.setLabel('🔒Lock Down Channel🔒')
					.setStyle('PRIMARY'),
			);
    */
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('delmsg')
					.setLabel('OK')
					.setStyle('DANGER')
			); 
              //message.channel.send({content: "Witch punnishment action do you wana do?", components: [row] });
              message.channel.send({content: "Command Disabled", components: [row] });
              
			  if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
				message.delete();
				}
}

module.exports.help = {
  name:"punnish"
}
