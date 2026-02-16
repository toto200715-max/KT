const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')

module.exports = {
    name: 'delete-line',
    type: 1,
    description: 'حذف الخط الخاص بالبوت',




    run: async( Client, Interaction ) => {
        if (Interaction.member.permissions.has('Administrator')) {
            if (db.get(`lines_${Interaction.guild.id}`)) {
                db.delete(`lines_${Interaction.guild.id}`)
                const Embed = new EmbedBuilder()
                .setDescription(`تم بنجاح مسح الخط من الداتا`)
                Interaction.reply({ embeds: [Embed]})
            } else {
                Interaction.reply({ content: `لا يوجد خط في الداتا بيس`})
            }
    }
}}