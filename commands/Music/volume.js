const { Client, Message } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0] || isNaN(args[0]))
    return message.channel.send("Volume must be a valid number");

  if (parseInt(args[0]) < 1 || parseInt(args[0]) > 200)
    return message.channel.send("Volume must be between 1 and 200");

  const worked = client.player.setVolume(message, parseInt(args[0]));
  if (worked) {
    return message.channel.send(`Successfully set the volume to ${args[0]}%`);
  }
}

module.exports.help = {
  aliases: [],
  name: 'volume',
  description: 'Set the volume of the currently playing song.',
  usage: '>volume',
};

module.exports.config = {
  args: false,
  restricted: false,
  category: 'Music',
  disable: false,
  userPerms: [],
  cooldown: 1000,
};