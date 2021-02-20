const dbr = require("./index")

const client = new dbr.Client({

})

client.login("ODEwODY5MTI3MTkwNTQ0Mzg0.YCp6uQ.kQuUOWF-G-rTUUxcOg85nAMroGA")

client.on("ready", () => {
    console.log(client.eu.nome)
})

client.on("message", async (message) => {
    let array = message.conteudo.split(" ")
    let cmd = array[0]
    let args = array.slice(1)

    if(cmd === "dbr!eval"){
        if(!["719986033583849502"].includes(message.autor.id)) return message.reply("❌ Erro 404!")

        try{

            if(!args[0]) return message.reply(".,.")

            let evaled = await eval(args.join(" "))

            message.reply(`\`\`\`js\n${require("util").inspect(evaled, {depth: 0})}\`\`\``)

        }catch(e){
            return message.reply(e)
        }
    }
})