const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
module.exports = {
    name: 'set-channel',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
    if (Message.member.permissions.has('Administrator')) {
    const Channel = Message.mentions.channels.first() || Args[0]
    if (Channel === db.get(`Channels_${Message.guild.id}`)) {
       return Message.reply({ embeds: [new EmbedBuilder().setDescription(`الروم موجوده بالفعل`)]})
    }
    if (Channel) {
    db.push(`Channels_${Message.guild.id}`, Channel.id)
    const Embed = new EmbedBuilder()
    .setDescription(`تم بنجاح اختيار الروم ${Channel}`)
    Message.reply({ embeds: [Embed]})
    } else {
        Message.reply({ content: `قم بادخال الروم بشكل صحيح :x:`})
    }}
    }
}