const Discord = require("discord.js");
const { Client } = require("discord.js");
const Canvas = require("canvas");
require("dotenv").config();

const token = process.env.DISCORD_TOKEN;

const client = new Client({
  disableEveryone: true,
});

client.on("ready", () => {
  console.log(`${client.user.username} is aktiv!`);

  client.user.setPresence({
    status: "online",
    game: {
      name: "SAMP me gollf 2sha",
      type: "WATCHING",
    },
  });
});

client.on("message", async (message) => {
  const guild = client.guilds.cache.get(message.guild.id);
  const channel = guild.channels.cache.get(message.channel.id);
  const canvas = Canvas.createCanvas(636, 636);
  const ctx = canvas.getContext("2d");
  const background = await Canvas.loadImage("cake.png");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  let rep = message.content.substring(0, 6).toLowerCase();
  if (rep == "!urime") {
    var urimi = message.content.substr("!urime ".length);
    // urimi = urimi.replace(" ", "\n");
    console.log(urimi.length);
    if (urimi.length > 24) {
      message.reply("e hargjove krejt tortEn, 24 karaktere boll o");
    } else {
      let messageTxt = ":nazar_amulet: :nazar_amulet: :nazar_amulet:";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "bold 25pt Arial";
      ctx.fillStyle = "#2F3ACC";
      ctx.fillText(urimi, 310, 310);
      ctx.save();
      const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
        "/cake.png"
      );
      console.log("shkoj");
      channel.send(messageTxt, attachment);
    }
  }
});

client.login(token);
