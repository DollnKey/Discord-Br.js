module.exports = class User{
    constructor(client, dados) {
        this.nome = dados.username
        this.id = dados.id
        this.hashtag = dados.discriminator
        this.bot = dados.bot || false
        this.avatar = dados.avatar
        this._client = client
        this._status = "";
        this._clientstatus = {};
        this._activities = [];
        this.criadoEm = new Date(Math.floor(this.id / 4194304) + 1420070400000)
    }

    set status(status){
        this._status = status
    }

    set clientstatus(status) {
        this._clientstatus = status
    }

    set activites(activites) {
        this._activities = activites
    }

    get activites(){
        return this._activities
    }

    get status(){
        return this._status
    }

    get clientstatus(){
        return this._clientstatus
    }
}