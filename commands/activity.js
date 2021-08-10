const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID('chess')
					.setLabel('🐴Chess🐴')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('poker')
					.setLabel('🃏Poker🃏')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('betrayal')
					.setLabel('🔪Betrayal🔪')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('fishing')
					.setLabel('🎣Fishing🎣')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('youtube')
					.setLabel('📺Youtube📺')
					.setStyle('PRIMARY'),
			);
			message.channel.send({content: "What activity do you wana play?", components: [row] });
               //message.channel.send("What activity do you wana play?", { components: [row] });
			   if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
			   message.delete();
			   }
			
}

module.exports.help = {
  name:"activity"
}
