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
            let autor = data.author;
            this.author = {
                nome: String(autor.username),
                id: String(autor.id),
                hashtag: String(autor.discriminator),
                avatar: String(autor.avatar),
                flags: Number(autor.public_flags)
            }
        }
    }
}