import {EventEmitter} from "events"
import { FormatoImagem } from "./src/Utils/Constants";
import Message from "./src/Utils/Message";

declare function dbr(options?: DBR.ClientOptions): dbr.Client;


declare namespace dbr {
    export const Constants: Constants;
    export const VERSAO: string;

    type formatoImagem = "jpg" | "jpeg" | "png" | "gif" | "webp";
    type MessageConteudo = string | {
        allowedMentions?: AllowedMentions;
        content?: string;
        embed?: EmbedOptions;
        flags?: number;
        tts?: boolean;
    }

    interface ClientUser {
        nome: string;
        hashtag: string,
        verificado: boolean,
        id: string,
        flags: number,
        email: string,
        bot: boolean,
        avatar: string
    }

    interface ClientOptions {
        formatoImagem?: formatoImagem;
    }

    
    export class Client extends EventEmitter {
        options: ClientOptions;
        token: string;
        tempoon: number;
        user: ClientUser;
        login(token: string): void;
        emit(evento: string, ...args: any[]): void;
    }

    interface EventListeners<T> {
        (event: "ready" | "disconnect", listener: () => void): T;
        (event: "message", listener: (message: Message) => void): T;
    }

    

    export class Message<T>{
        conteudo: MessageConteudo;
        type: number;
        criado: number;
        servidorID: string;
        canalID: string;
        id: string;
        autor: {
            nome: string;
            id: string;
            hashtag: string;
            avatar: string;
        }
    }

    
}

module.exports = Client