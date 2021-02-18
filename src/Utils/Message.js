module.exports = class Message {
    constructor(data, client){
        this._client = client;
        this.tipo = data.type || 0
        this.criado = Date.parse(data.timestamp)
        this.conteudo = data.content || "";
        this.servidorID = data.guild_id;
        this.canalID = data.channel_id;
        this.id = data.id
        if(data.author){
            let autor = data.author;
            this.autor.nome = autor.username
            this.autor.id = autor.id
            this.autor.hashtag = autor.discriminator
            this.autor.avatar = autor.avatar
        }
    }
}