interface autor {
   nome: string;
   id: string;
   hashtag: string;
   avatar: string;
}

export default class Message {
    _client;
    tipo: string;
    criado: number;
    conteudo: string;
    servidorID: string;
    canalID: string;
    id: string;

    autor: autor

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