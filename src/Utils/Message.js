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
            this.autor.criadoEm = new Date(Math.floor(this.autor.id / 4194304) + 1420070400000)
        }

        if(data.member){
            let membro = data.member;
            this.member = {}
            this.member.nickname = membro.nick
            this.member.entrouEm = membro.joined_at
            this.member.cargos = membro.roles
        }
    }

    async reply(content = ""){
        const userAgent = `DiscordBot (https://github.com/Discord-br/Discord-Br.js, ${require("../../package.json").version})`;
        
        let res = ""
        
        return new Promise((resolve, reject) =>{
        const headers = {
                "Authorization": "Bot "+this._client.token,
                "User-Agent": userAgent,
                "Content-Type": "application/json"
        };
        
        const fetch = require("node-fetch")

        let data = JSON.stringify({content: content, tts: false, message_reference: {message_id: this.id, guild_id: this.servidorID}})

        fetch("https://discord.com"+"/api/v8"+"/channels/" + `${this.canalID}/messages`, {
            method: "POST",
            body: data,
            headers: headers
        }).then(res => res.json())
        .then(json => {
            res = new Message(json, this._client)
        })
        return res;
        })
    }
}