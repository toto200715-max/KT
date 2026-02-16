const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')

module.exports = {
    name: 'delete-channels',
    type: 1,
    description: 'حذف الرومات المختارة اوتو لاين',




    run: async( Client, Interaction ) => {
        if (Interaction.member.permissions.has('Administrator')) {
            if (db.get(`Channels_${Interaction.guild.id}`)) {
                db.delete(`Channels_${Interaction.guild.id}`)
                const Embed = new EmbedBuilder()
                .setDescription(`تم بنجاح مسح الرومات من الداتا بيس`)
                Interaction.reply({ embeds: [Embed]})
            } else {
                Interaction.reply({ content: `لا يوجد رومات مختارة`})
            }
    }
}}