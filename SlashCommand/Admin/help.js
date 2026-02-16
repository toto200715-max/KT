const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
module.exports = {
    name: 'help',
    type: 1,
    description: `عرض الاوامر الموجوده في البوت`,



    run: async( Client, Interaction ) => {
    const Prefix = Client.Prefix
    const Embed = new EmbedBuilder()
    .setAuthor({ name: Interaction.user.username, iconURL: Interaction.user.displayAvatarURL()})
    .setColor('Random')
    .setFooter({ text: Interaction.user.username, iconURL: Interaction.user.displayAvatarURL()})
    .setThumbnail(Interaction.user.displayAvatarURL()).setTitle('قائمة الاوامر')
    .addFields(
        { name: `/set-channels`, value: `تحديد رومات الخط التلقائي`, inline: true },
        { name: `/set-line`, value: `تحديد خط الخط التلقائي`, inline: true },
        { name: `/delete-line`, value: `حذف الخط من الداتا بيس`, inline: true },
        { name: `/delete-channels`, value: `حذف رومات الخط التلقائي`, inline: true },
        { name: `/help`, value: `رؤيه جميع الاوامر`, inline: true },
    )
    Interaction.reply({ embeds: [Embed]})
    }
}