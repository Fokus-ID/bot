let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081320170984]
│ • Telkomsel [081320170984]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [081320170984]
│ • https://saweria.co/aguzfamilia
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
