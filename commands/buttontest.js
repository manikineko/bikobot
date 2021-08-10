const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID('test')
					.setLabel('Test')
					.setStyle('PRIMARY'),
			);
     
			message.channel.send({content: "Test", components: [row] });
			if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
				message.delete();
				}
}

module.exports.help = {
  name:"buttontest"
}
