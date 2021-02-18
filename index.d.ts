import { EventEmitter } from "events";
import Collection from "./src/Utils/Collection";

interface options {
    formatoImagem: "png" | "jpg" | "jpeg" | "webp" | "gif";
}

declare function DiscordBr(options?: options): DiscordBr.Client;

declare namespace DiscordBr {
    interface autor {
        nome: string,
        id: string,
        hashtag: string,
        avatar: string,
        flags: number
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

    interface Guild {
        entrou: number;
        quantidadeMembros: number;
        id: string;
        nome: string;
    }

    interface EventListeners<T> {
        (event: 'message', func: (msg: Message) => void): T;
        (event: "ready", func: () => void): T;
        (event: "guildCreate", func: (guild: Guild) => void): T;
    }

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

    interface options {
        formatoImagem: "png" | "jpg" | "jpeg" | "webp" | "gif";
    }

    export class Client extends EventEmitter {
        eu: ClientUser;
        tempoon: number;
        token: string;
        options: options;
        servidores: Collection;
        on: EventListeners<this>;

        login(token: string): void;

        enviarMensagem(id: string, content: string): void;
    }
}

export = DiscordBr