const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	description: "pong!",
	options: [
	],
	async execute(bot, say, interaction, args) {
		
		await say(interaction, "pong");
	},
};
