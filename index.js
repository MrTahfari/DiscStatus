let Discord = require("discord.js");
let client = new Discord.Client();
client.on('ready', () => {
 client.user.setActivity('+help | prefix is +', { type: 'WATCHING' })
})
client.on("message", message => {
if (message.content === "ping") {
message.channel.send("pong!")
}
if(message.content === "embed") {
 let embed = new Discord.MessageEmbed()
 .setTitle("this is Emded title")
 .setDescription("this is Embed description")
 .setColor("RANDOM")
 .setFooter("This is embed footer")
 message.channel.send(embed)
}
})

client.login("your token here")
