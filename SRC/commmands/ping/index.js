import { SlashCommandBuilder } from 'discord.js'


export const command = new SlashCommandBuilder()
.Setname('ping')
.SetDescription('ping command')

export const action = async (interaction) => {
    interaction.reply('pong!')
}