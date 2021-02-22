const { throws } = require('assert');
const { EventEmitter } = require('events');
const Collection = require('../Utils/Collection');
const Emoji = require('../Utils/Emoji');
const Guild = require('../Utils/Guild');
const Message = require('../Utils/Message');
const Role = require('../Utils/Role');
const User = require('../Utils/User');
const Websocket = require('../WebSocket/WebSocketManager');

/**
 * @constructor
 * @param {object} options - configurações do client
 */

module.exports = class Client extends EventEmitter {
    constructor(options = {formatoImagem: "png"||"gif"||"jpeg"||"jpg"||"webp"}) {
        super()
        this.token;

        /*
        nome: string;
        hashtag: string;
        id: string;
        verificado: boolean;
        email: string;
        bot: boolean;
        flags: number;
        avatar: string;
        */

        this._user = {
            nome: "",
            hashtag: "",
            id: "",
            verificado: false,
            email: "",
            bot: false,
            flags: 0,
            avatar: ""
        }

        this.emojis = new Collection(Emoji)

        this._ping = 0;

        this.usuarios = new Collection(User)

        this.options = Object.assign({
            formatoImagem: "png"||"gif"||"jpeg"||"jpg"||"webp"
        }, options)

        this.online = false;

        if (this.options && this.options.formatoImagem && !["png", "gif", "jpeg", "jpg", "webp"].includes(this.options.formatoImagem)) {
            throw new Error("Formato de Imagem errado!")
        }

        this.startTime = 0;
        this.servidores = new Collection(Guild);

        this._preguilds = []

        this.cargos = new Collection(Role)

        this.utils = {
            msToDate: async function(time) {
                time = Math.round(time / 1000);
                const s = time % 60,
                    m = Math.floor((time / 60) % 60),
                    h = Math.floor((time / 60 / 60) % 24),
                    d = Math.floor(time / 60 / 60 / 24);
            
                return {
                     dias: d,
                     horas: h,
                     minutos: m,
                     segundos: s
                }
            }
        }
        
    }

    set ready(aa){
        this.online = aa;
    }
    
    get ping(){
        return this._ping
    }

    set ping(ping){
        this._ping = ping
    }

    async enviarMensagem(id = "", content){
        
        if(typeof content == "string"){
            await this.FetchMessage(id, {
                "content": content,
                "tts": false
              })
        }
    }

    async FetchMessage(id = "", body = {}){
        const userAgent = `DiscordBot (https://github.com/Discord-br/Discord-Br.js, ${require("../../package.json").version})`;
        let res = ""
        
        return new Promise((resolve, reject) =>{
        const headers = {
                "Authorization": "Bot "+this.token,
                "User-Agent": userAgent,
                "Content-Type": "application/json"
        };
        
        const fetch = require("node-fetch")

        let data = JSON.stringify(body)

        fetch("https://discord.com"+"/api/v8"+"/channels/" + `${id}/messages`, {
            method: "POST",
            body: data,
            headers: headers
        }).then(res => res.json())
        .then(json => {
            res = new Message(json, this)
        })
        return res;
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
        const ws = new WebSocket(this)
        ws.connect(this.token)
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