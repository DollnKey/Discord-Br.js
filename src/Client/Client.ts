import { EventEmitter } from "events"
import Collection from "../Utils/Collection"
import Guild from "../Utils/Guild"

interface options {
    formatoImagem: "png" | "jpg" | "jpeg" | "webp" | "gif"
}

const events = new EventEmitter()



interface ClientUser {
    nome: string;
    hashtag: string;
    id: string;
    verificado: boolean;
    email: string;
    bot: boolean;
    flags: number;
    avatar: string;
}

interface autor {
    nome: string,
    id: string,
    hashtag: string,
    avatar: string
}

interface Message {
    tipo: string;
    criado: number;
    conteudo: string;
    servidorID: string;
    canalID: string;
    id: string;
    autor: autor
}


export default class Client extends EventEmitter {

    token: string;
    user;

    options: options;

    startTime: number;

    ClientUser: ClientUser;

    _user;

    Collection: Collection;

    servidores: Collection;


    constructor(options: options) {
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

        if (this.options.formatoImagem && !["png", "gif", "jpeg", "jpg", "webp"].includes(this.options.formatoImagem)) {
            throw new Error("Formato de Imagem errado!")
        }


        this.startTime = 0;

        this.servidores = new Collection(Guild)
    }

    async login(token: string) {
        if (!token || typeof token !== "string") throw new Error("Token Inválido!")
        this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '');
        const websocket = await import("../WebSocket/WebSocketManager")
        this.startTime = Date.now()
        const ws = new websocket.Websocket(this).connect(this.token)


    }


    get tempoon() {
        return Date.now() - this.startTime
    }



    get chave() {
        return this.token
    }

    set eu(user: ClientUser) {
        this._user = user
    }

    get eu() {
        return this._user
    }

}