const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')

module.exports = {
    name: 'set-channels',
    type: 1,
    description: 'اختيار رومات الخط التلقائي',
    options: [
        {
            name: 'channel',
            type: 7,
            description: 'اختر الرومات',
            required: true
        }
    ],




    run: async( Client, Interaction ) => {
        if (Interaction.member.permissions.has('Administrator')) {
            const Channel = Interaction.options.getChannel('channel')
            if (Channel === db.get(`Channels_${Interaction.guild.id}`)) {
               return Interaction.reply({ embeds: [new EmbedBuilder().setDescription(`الروم موجوده بالفعل داخل الداتا`)]})
            }
            if (Channel) {
            db.push(`Channels_${Interaction.guild.id}`, Channel.id)
            const Embed = new EmbedBuilder()
            .setDescription(`تم بنجاح اضافه الروم الي الداتا بيس ${Channel}`)
            Interaction.reply({ embeds: [Embed]})
            }}
}}