import WebSocket from "ws"

interface Client {
   token: string;
}

export class Websocket {

    token: string;
    url: string;
    ws;
    interval;
    client: Client
    
    constructor(client: Client) {
        this.token;
        this.url = "wss://gateway.discord.gg/?v=8&encoding=json"
        this.ws;
        this.interval;
        this.client = client;
    }


    async connect(token: string){
        this.token = token;

        this.ws = new WebSocket(this.url)

        this.ws.on("open", async () => {
            await this.ws.send(JSON.stringify({
                op: 2,
                d: {
                    token: this.token,
                    intents: 513,
                    properties: {
                        $os: process.platform.toString(),
                        $browser: "discord-br.js",
                        $device: "discord-br.js"
                    },
                }
            }))
        })

        this.ws.on("message", async (msg) => {
            try {
                const payload = JSON.parse(msg.toString())
                console.log(payload)
                const { t: event, s, op, d } = payload
                const { heartbeat_interval } = d;
                switch (op) {
                    case 10:
                        this.interval = this.heartbeat(heartbeat_interval)
                        break;
                    case 0:
                        try{
                         const {default: module} = await import(`../handlers/${event}.ts`)
                         if(module){
                         module(this.client, payload)
                         }
                        }catch(e){
                            console.log(e)
                        }
                        break;
                }
            } catch (e) {
                console.log(e)
            }
        })
    }
    heartbeat(ms = 1) {
        return setInterval(() => {
            this.ws.send(JSON.stringify({
                op: 1,
                d: null
            }))
        }, ms)
    }

    async identify() {
        const identify = {
            op: 2,
            d: {
                token: this.token,
                intents: 513,
                properties: {
                    $os: process.platform.toString(),
                    $browser: "discord-br.js",
                    $device: "discord-br.js"
                }
            }
        }
        await this.ws.send(JSON.stringify(identify))
        return;
    }
}