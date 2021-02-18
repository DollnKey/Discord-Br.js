export default class Guild {
    _client;
    entrou: number;
    quantidadeMembros: number;
    id: string;

    constructor(data, client){
        this._client = client;

        this.entrou = Date.parse(data.joined_at)
        this.quantidadeMembros = data.member_count;
        this.id = data.id
    }
}