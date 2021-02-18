const dbr = require("./index")

const client = new dbr.Client()

client.on("ready", () => {
    console.log(client.eu.nome + " Iniciado!")
})

client.on("message", async (message) => {
    let cmd = message.conteudo

    if(cmd.toLowerCase() === "dbr!ping"){
        client.enviarMensagem(message.canalID, "Pong!");
    }
})

client.login("ODEwODY5MTI3MTkwNTQ0Mzg0.YCp6uQ.cD79SIwmM4Gvnw1EZ3tRGSLbkSk")