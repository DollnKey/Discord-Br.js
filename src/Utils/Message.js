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
}