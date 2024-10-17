module.exports.data = {
    name: "avata",
    description:"Xem ảnh đại diện ai đó",
    type: 1,
    options: [
        {
            name: "user",
            description: "chọn người dùng để xem avata",
            type: 6,
            required: false
        },
    ],
    intergration_types: [0, 1],
    contexts: [0, 1, 2],
}

module.exports.execute = async(interaction) => {
    const user = interaction.options.getUser("user") ||interaction.user
    interaction.reply(user.displayAvatarURL({ size: 1024}));
    return;
}