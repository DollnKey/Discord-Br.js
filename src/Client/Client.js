const { EventEmitter } = require('events');
const Collection = require('../Utils/Collection');
const Guild = require('../Utils/Guild');

module.exports = class Client extends EventEmitter {
    constructor(options) {
        super()
        this.token;
        this._user = {
            nome: "",
            hashtag: 0,
            verificado: false,
            id: "",
            email: "",
            bot: true,
            avatar: ""
        }

        this.options = options

        if (this.options && this.options.formatoImagem && !["png", "gif", "jpeg", "jpg", "webp"].includes(this.options.formatoImagem)) {
            throw new Error("Formato de Imagem errado!")
        }

        this.startTime = 0;
        this.servidores = new Collection(Guild);
    }

    async login(token) {
        if (!token || typeof token !== "string") throw new Error("Token Inválido!");
        this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '');
        const WebSocket = require("../WebSocket/WebSocketManager");
        this.startTime = Date.now();
        const ws = new WebSocket(this).connect(this.token);
    }


    get tempoOn() {
        return Date.now() - this.startTime
    }

    get chave() {
        return this.token
    }

    set eu(user) {
        this._user = user
    }

    get eu() {
        return this._user
    }

}