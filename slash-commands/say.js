module.exports = {
	name: "say",
	description: "Say command.",
	options: [
		{
			name: "text",
			description: "You can print something on the bot.",
			type: 3,
			required: true,
		},
	],
	async execute(bot, say, interaction, args) {
		let message = interaction.message;
		let sargs = [args.length];
		let index = 0;
		args.forEach(arg => {
			sargs[index] = arg;
			index++;
		});
		var argsstr = "";   
		var argi = 0;

		if (!message.member.permissions.has(["MANAGE_MESSAGES"])) return say(interaction, "You can't use this command")
		const sayembed = new Discord.MessageEmbed()
		.setColor('#000000')
		.setTitle('🗣User Message🗣') 
		.setURL("")
		.setAuthor( message.author.tag , message.author.avatarURL,"")
		.setDescription(sargs.join(" "))
		.setTimestamp()
		.setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
	   
		await say(interaction, embed);
	},
};
