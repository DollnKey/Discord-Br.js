module.exports = class Member {
    constructor(client,  member) {
        const _client = client

        this.membro = {}
        this.membro.nickname = member.nick || this.autor.nome
        this.membro.entrouEm = member.joined_at
        this.membro.cargos = member.roles
        this.membro.permissions = []
        this.membro.id = this.autor.id
        this.membro.cargos.map(e => {
            this.membro.permissions.push(this.servidor.cargos.get(e).permissions)
        })
        const total = this.membro.permissions.reduce((total, cE) => parseInt(total) + parseInt(cE))

        this.membro.permissions = total.toString()
    }
}