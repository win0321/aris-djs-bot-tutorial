import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('愛麗絲的自我介紹')
.setDescription('自我介紹')

export const action = async (interaction) => {
    interaction.reply('愛麗絲是來自遊戲開發社的光屬性坦克兼見習勇者!')
}