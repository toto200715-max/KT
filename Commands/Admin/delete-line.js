const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
module.exports = {
    name: 'delete-line',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
    if (Message.member.permissions.has('Administrator')) {
    db.delete(`lines_${Message.guild.id}`)
    const Embed = new EmbedBuilder()
    .setDescription(`تم بنجاح حذف الخط المخزن ف الداتا`)
    Message.reply({ embeds: [Embed]})
    }
  }
}