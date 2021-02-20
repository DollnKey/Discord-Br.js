const Collection = require("../Utils/Collection")
const Role = require("./Role");

module.exports = class Guild {
    _client;
    entrou;
    quantidadeMembros;
    id;

    constructor(data, client){
        this._client = client;

        this.entrou = Date.parse(data.joined_at)
        this.quantidadeMembros = Number(data.member_count);
        this.id = String(data.id)
        this.nome = String(data.name)
        this.cargos = new Collection(Role)
        data.roles.map(e => {
            this.cargos.adicionar(new Role(client, e))
        })
    }

    get entrou(){
        return this.entrou
    }

    get quantidadeMembros(){
        return this.quantidadeMembros
    }

    get id(){
        return this.id
    }
}