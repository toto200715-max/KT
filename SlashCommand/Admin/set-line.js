const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')

module.exports = {
    name: 'set-line',
    type: 1,
    description: 'اختيار الخط',
    options: [
        {
            name: 'line',
            type: 3,
            description: 'قم بوضع رابط الخط',
            required: true
        }
    ],




    run: async( Client, Interaction ) => {
        if (Interaction.member.permissions.has('Administrator')) {
            const line = Interaction.options.getString('line')
            if (!line.startsWith('https://')) return Interaction.reply({ content: `قم بوضع لينك صحيح`})
            if (line === db.get(`lines_${Interaction.guild.id}`)) {
               return Interaction.reply({ embeds: [new EmbedBuilder().setDescription(`الخط داخل الداتا بالفعل`)]})
            }
            if (line) {
            db.set(`lines_${Interaction.guild.id}`, line)
            const Embed = new EmbedBuilder()
            .setDescription(`تم بنجاح اضافه الخط الي الداتا ${line}`)
            Interaction.reply({ embeds: [Embed]})
            } else {
                Interaction.reply({ content: `Pleas Add The line :x:`})
            }}
}}