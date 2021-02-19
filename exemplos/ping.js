const dbr = require("discord-br.js")

const client = new dbr.Client()

client.login("TOKEN")

client.on("message", async(message) => {
    
   if(message.conteudo === "!ping"){
       message.reply("Pong!")
   }
    
})