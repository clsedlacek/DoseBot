// Kat2 message
exports.run = (client, message, args) => {
  console.log(`**********Executing Kat2 on ${message.guild.name}**********`);

  message.channel
    .send(
      '<@371151824331210755> https://i.imgur.com/vDsQ3kH.jpg\n\nHello I am Kat nice to meet you!'
    )
    .catch(console.error);
};
