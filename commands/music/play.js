module.exports.data = {
    name: "play",
    description:"Phát nhạc",
    type: 1,
    options: [],
    intergration_types: [0],
    contexts: [0],
}

module.exports.execute = async(interaction) => {
    const ping = interaction.sclient.ws.ping;
    interaction.reply(ping);
    return;
}