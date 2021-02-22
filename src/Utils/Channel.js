module.exports = class Channel{
    constructor(client, data){
        this.tipo = data.type
        this.topico = data.topic || ""
        this.nsfw = data.nsfw
        this.nome = data.name
        this.id = data.id
        this.ultimamensagem = data.last_message_id
        this.position = data.position
        this.category = this.parent_id
    }
}