import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('愛麗絲在嗎')
.setDescription('測試')

export const action = async (interaction) => {
    interaction.reply('不在!')
}