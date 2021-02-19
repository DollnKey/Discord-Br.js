const dbr = require("discord-br.js")

const client = new dbr.Client()

client.login("TOKEN")

client.on("message", async(message) => {
    
   if(message.conteudo === "!ping"){
       client.enviarMensagem(message.canalID, "Pong!")
   }
    
})