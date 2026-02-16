const { Database } = require('st.db')
const db = new Database('DataBots/Status')
module.exports = async Client => {
const Status = db.get(`SS_${Client.user.id}`)
const Activity = db.get(`Activity_${Client.user.id}`)
if (Activity) {
Client.user.setActivity(`${Activity || 'Almasa'}`)
}
if (Status === 'idle') {
    Client.user.setStatus('idle')
} else if (Status === 'dnd') {
    Client.user.setStatus('dnd')
}}