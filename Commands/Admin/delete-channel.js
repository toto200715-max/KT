const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
module.exports = {
    name: 'delete-channels',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
    if (Message.member.permissions.has('Administrator')) {
    db.delete(`Channels_${Message.guild.id}`)
    const Embed = new EmbedBuilder()
    .setDescription(`تم بنجاح حذف كل الرومات`)
    Message.reply({ embeds: [Embed]})
    }
  }
}