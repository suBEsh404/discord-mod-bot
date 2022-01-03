const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const keepAlive = require('./keepAlive.js');

require('dotenv').config();  
require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})

keepAlive();
client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(`sup`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hru"))
  {
    message.channel.send(`im fine, you?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good"))
  {
    message.channel.send(`Mkay`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(`Huh? whats funny?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`BIG BRUH MOMENTO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(`WHY?! UR SUCH AN AMAZING PERSON!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("tag"))
  {
    message.channel.send(`! "𝗜𝘁𝘇 {username}ᴼᶠᶠᶦᶜᶦᵃˡ`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(`Ur sus!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(`hey!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("whats your name?"))
  {
    message.channel.send(`whats my name? i am mod :D`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`wanna invite me ? here's the link https://discord.com/oauth2/authorize?client_id=831518834312871956&scope=bot&permissions=8`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`Lol!`)
  }
});
var randMessage = (["Send a picture of your muscles in the :muscle: position", "...?", "Tell your crush you love them", "*Eat something*", "*Ask your mom to buy you robux*", "Change your pfp to what the rest of the people here say","Buy nitro", "Sneeze very loud and fake and record it", "*Do a face reveal*", "Call ur mom and tell her ur stomach aches"]);
var randomAnswer = randMessage[Math.floor(Math.random() * answers.length)];
message.channel.send(randomAnswer); 
module.exports.config = {
  name: 'list',
  aliases: ['D'],
  essential: true
};
  
