const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomID('ytdl')
					.setLabel('✔Yes✔')
					.setStyle('PRIMARY'),
					new MessageButton()
					.setCustomID('delmsg')
					.setLabel('❌No❌')
					.setStyle('PRIMARY'),
			);
     
               message.channel.send("Warnning Only use these videos for meme purposes and do NOT download movie/copyright protected content this converter is AS-IS were not responcible for copyrights\nDO you  agree?", { components: [row] });
               message.delete();
}

module.exports.help = {
  name:"ytdl"
}
