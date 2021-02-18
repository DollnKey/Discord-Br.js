const { throws } = require('assert');
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

        this.online = false;

        if (this.options && this.options.formatoImagem && !["png", "gif", "jpeg", "jpg", "webp"].includes(this.options.formatoImagem)) {
            throw new Error("Formato de Imagem errado!")
        }

        this.startTime = 0;
        this.servidores = new Collection(Guild);

        
    }

    set ready(aa){
        this.online = aa;
    }

    async enviarMensagem(id, content){
          await this.FetchMessage(id, {"content": content, "tts": false, "embed": {}})
    }

    async FetchMessage(id, body){

        const _stackHolder = {};
        Error.captureStackTrace(_stackHolder);
        const userAgent = `DiscordBot (https://github.com/Discord-br, ${require("../../package.json").version})`;
        
        
        return new Promise((resolve, reject) =>{
        const headers = {
                "User-Agent": userAgent,
                "Accept-Encoding": "gzip,deflate",
                "X-RateLimit-Precision": "millisecond",
                "Authorization": this.token,
                "Content-Type": "application/json"
        };
        
        const HTTPS = require("https")

        let data;

        data = JSON.stringify(body);

        const req = HTTPS.request({
             method: "POST",
             host: "discord.com",
             headers: headers,
             path: "/api/v8"+"/channels/" + `${id}/messages`,
        
        })

        req.on("error", e => {
            console.log(e)
        })

        req.write(data)
        req.end()

        })
    }


    get ready(){
        return this.online
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