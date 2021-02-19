module.exports = class User{
    constructor(client, dados) {
        this.nome = dados.username
        this.id = dados.id
        this.hashtag = dados.discriminator
        this.bot = dados.bot
        this.avatar = dados.avatar
        this._client = client
    }
}