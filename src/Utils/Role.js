module.exports = class Role{
    constructor(client, data){
        this._client = client

        this.permissions = data.permissions
        this.nome = data.name
        this.mencionavel = data.mentionable
        this.id = data.id
        this.cor = data.color
    }
}