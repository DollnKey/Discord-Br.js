module.exports = class User{
    constructor(client, dados) {
        this.nome = dados.username
        this.id = dados.id
        this.hashtag = dados.discriminator
        this.bot = dados.bot || false
        this.avatar = dados.avatar
        this._client = client
        this.status = null;
        this.clientstatus = {};
    }

    set status(status){
        this.status = status
    }

    set clientstatus(status) {
        this.clientstatus = status
    }
}