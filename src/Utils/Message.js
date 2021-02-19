module.exports = class Message {
    constructor(data, client){
        this._client = client;
        this.tipo = data.type || 0
        this.criado = Date.parse(data.timestamp)
        this.conteudo = data.content || "";
        this.servidorID = data.guild_id || "";
        this.canalID = data.channel_id || "";
        this.id = data.id
        if(data.author){
            let author = data.author;
            this.autor = {}
            this.autor.nome = author.username
            this.autor.id = author.id
            this.autor.hashtag = author.discriminator
            this.autor.avatar = author.avatar
            this.autor.flags = author.public_flags
        }
    }

    async reply(body = ""){
        const userAgent = `DiscordBot (https://github.com/Discord-br/Discord-Br.js, ${require("../../package.json").version})`;
        
        
        return new Promise((resolve, reject) =>{
        const headers = {
                "Authorization": "Bot "+this.token,
                "User-Agent": userAgent,
                "Content-Type": "application/json"
        };
        
        const fetch = require("node-fetch")

        let data = JSON.stringify({content: body, tts: false})

        fetch("https://discord.com"+"/api/v8"+"/channels/" + `${this.canalID}/messages/${this.id}/crosspost`, {
            method: "POST",
            body: data,
            headers: headers
        }).then(res => res.json())
        .then(json => {
            return;
        })
        })
    }
}