const db = require('pro.db')
module.exports = {
    name: 'line',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
    if (Message.member.permissions.has('Administrator')) {
    const line = db.get(`lines_${Message.guild.id}`)
    if (!line) return Message.reply({ content: `:x: قم بادخال الخط`})
    Message.delete();
    Message.channel.send({ files: [line]})
    }
}}