import Client from "./index.js"

export default function(options){
    const client = new Client.Client(options)
    return client;
}

export const {
    Constants,
    Guild,
    Message,
    Collection,
    Client
} = Client;