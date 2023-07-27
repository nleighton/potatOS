const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get avatar of a user.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('The user whose avatar you want to see')
				.setRequired(true)
		),
	async execute(interaction) {
		const targetUser = interaction.options.getMember('user');

		if (!targetUser) {
			await interaction.reply('Please specify a valid user to get their avatar.');
			return;
		}

		const avatar = targetUser.user.displayAvatarURL({ size: 1024, dynamic: true });

		// Generate a unique color based on the user's ID
		const userId = targetUser.user.id;
		const color = generateColor(userId);

		const authorIcon = interaction.user.avatar ? interaction.user.displayAvatarURL() : null;

		const avatarembed = new EmbedBuilder()
			.setColor(color)
			.setImage(avatar)

		await interaction.reply({ embeds: [avatarembed] });
	},
};
