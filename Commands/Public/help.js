const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h"],
    cooldown: 5,


    

    run: async(Client, Message, Args) => {
    const Prefix = Client.Prefix
    const Embed = new EmbedBuilder()
    .setAuthor({ name: Message.author.displayName, iconURL: Message.author.displayAvatarURL()})
    .setColor('Random').setFooter({ text: Message.author.displayName, iconURL: Message.author.displayAvatarURL()})
    .setThumbnail(Message.author.displayAvatarURL()).setTitle('Help Commands').setFields(
        { name: `/set-channels`, value: `وضع الرومات الخاصه بالخط التلقائي`, inline: true },
        { name: `/set-line`, value: `وضع الخط الخاص بالخط التلقائي`, inline: true },
        { name: `/delete-line`, value: `حذف الخط الخاصه بالخط التلقائي`, inline: true },
        { name: `/delete-channels`, value: `حذف الرومات الخاصه بالخط التلقائي`, inline: true },
        { name: `${Prefix}help`, value: `عرض اوامر البوت`, inline: true },
    )
    Message.reply({ embeds: [Embed] })
    }
}