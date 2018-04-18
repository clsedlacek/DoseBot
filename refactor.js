const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.DISCORD_API_TOKEN;
const CommandSystem = require("./command-system.js")()

var fs = require("fs");
var path = require("path");
var util = require("util");

client.on("ready", () => {
  console.log("DoseBot is online - beep boop");
  const servers = client.guilds;
  
  console.log(servers);
  
  for (let i = 0; i < servers.length; i++) {
    console.log(servers[i].guild);
  }
});

client.on("guildMemberAdd", member => {
  //logs every user who joins into the console
  console.log(member.user.username);
  console.log(member.toString());
  console.log(member.id.toString());
});

client.on("message", message => {
  CommandSystem.execute(client, message)
})

CommandSystem.load(function() {
  console.log("Command system loaded.")
})

client.login(token);
