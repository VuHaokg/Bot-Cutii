//const { Options } = require("discord.js");

module.exports.data = {
    name: "ping",
    description:"xem ping cua bot",
    type: 1,
    options: [],
    intergration_types: [0, 1],
    contexts: [0, 1, 2],
}

module.exports.execute = async(interaction) => {
    const ping = interaction.client.ws.ping;
    interaction.reply(`Ping: ${ping}`);
    return;
}