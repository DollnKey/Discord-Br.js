const { throws } = require("assert");

module.exports = class Message {
    constructor(data, client){
        this._client = client;
        this.tipo = data.type || 0
        this.criado = Date.parse(data.timestamp)
        this.conteudo = data.content || "";
        this.servidorID = data.guild_id || "";
        this.canalID = data.channel_id || "";
        this.id = data.id
        this.servidor = client.servidores.get(this.servidorID)
        if(data.author){
            let author = data.author;
            this.autor = {}
            this.autor.nome = author.username
            this.autor.id = author.id
            this.autor.hashtag = author.discriminator
            this.autor.avatar = author.avatar
            this.autor.flags = author.public_flags
            this.autor.criadoEm = new Date(Math.floor(this.autor.id / 4194304) + 1420070400000)
            let user = client.usuarios.get(this.id)
            if(user){
            this.autor.status = user.status ? user.status : user._status
            this.autor.activites = user.activites ? user.activites : user._activites
            this.autor.clientstatus = user.clientstatus ? user.clientstatus : user._clientstatus
            }
        }

        if(data.member){
            let member = data.member;
            this.membro = {}
            this.membro.nickname = member.nick || this.autor.nome
            this.membro.entrouEm = member.joined_at
            this.membro.cargos = member.roles
            this.membro.permissions = []
            this.membro.id = this.autor.id
            this.membro.cargos.map(e => {
               this.membro.permissions.push(this.servidor.cargos.get(e).permissions)
            })
            const total = this.membro.permissions.reduce((total, cE) => parseInt(total) + parseInt(cE))

            this.membro.permissions = total.toString()
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