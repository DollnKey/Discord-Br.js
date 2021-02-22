module.exports = class data {
    constructor(client, data) {
        //console.log(data)
        this._client = client
        this.entrouEm = data.joined_at
        this.cargos = data.roles
        this.permissions = []
        this.id = data.user.id || "0"
        this.cargos.map(e => {
            this.permissions.push(this._client.cargos.get(e) ? this_client.cargos.get(e).permissions : 0)
        })
        const total = this.permissions.reduce((total, cE) => parseInt(total) + parseInt(cE))

        this.nickname = data.nick || data.user.username

        this.permissions = total.toString()
    }
}