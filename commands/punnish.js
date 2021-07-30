const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  /*const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID('delmsg')
					.setLabel('❌None❌')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('ban')
					.setLabel('⛔Ban a User⛔')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('kick')
					.setLabel('👞Kick a User👞')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomID('lockchannel')
					.setLabel('🔒Lock Down Channel🔒')
					.setStyle('PRIMARY'),
			);
    */
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID('delmsg')
					.setLabel('OK')
					.setStyle('DANGER')
			); 
              //message.channel.send({content: "Witch punnishment action do you wana do?", components: [row] });
              message.channel.send({content: "Command Disabled", components: [row] });
              
			  message.delete();
}

module.exports.help = {
  name:"punnish"
}
