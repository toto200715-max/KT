const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
module.exports = {
    name: 'set-line',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
    if (Message.member.permissions.has('Administrator')) {
    const line = Args[0]
    if (line === db.get(`lines_${Message.guild.id}`)) {
       return Message.reply({ embeds: [new EmbedBuilder().setDescription(`الخط موجود بالفعل`)]})
    }
    if (line) {
    db.set(`lines_${Message.guild.id}`, line)
    const Embed = new EmbedBuilder()
    .setDescription(`تم بنجاح اضافه الخط الي الداتا بيس`)
    .setImage(`${line}`)
    Message.reply({ embeds: [Embed]})
    } else {
        Message.reply({ content: `قم بادخال رابط الخط :x:`})
    }}
    }
}