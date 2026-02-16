const { Database } = require('st.db')
const st = new Database('DataBots/Status')
module.exports = async( Client, Interaction ) => {
    if (!Interaction.isButton()) return;
    if (Interaction.customId === 'idle') {
        Client.user.setStatus('idle')
        st.set(`SS_${Client.user.id}`, 'idle')
        await Interaction.deferUpdate().catch(() => {})
        await Interaction.editReply({ content: `✅ done`, components: []})
    } else if (Interaction.customId === 'dnd') {
        Client.user.setStatus('dnd')
        st.set(`SS_${Client.user.id}`, 'dnd')
        await Interaction.deferUpdate().catch(() => {})
        await Interaction.editReply({ content: `✅ done`, components: []})
    } else if(Interaction.customId === 'online') {
        Client.user.setStatus('online')
        st.set(`SS_${Client.user.id}`, 'online')
        await Interaction.deferUpdate().catch(() => {})
        await Interaction.editReply({ content: `✅ done`, components: []})
    }
}