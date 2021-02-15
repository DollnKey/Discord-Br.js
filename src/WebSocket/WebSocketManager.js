const WebSocket = require("ws")
const { Client } = require("../Client/Client")
const { Identify, Heartbeat } = require("../Utils/Constants")

module.exports = class Websocket {
    constructor(client = Client) {
        this.token;
        this.url = "wss://gateway.discord.gg/?v=8&encoding=json"
        this.ws;
        this.interval;
        this.client = Client
    }

    async connect(token = "") {
        this.token = token;

        this.ws = new WebSocket(this.url, {
            auth: this.token,
        })

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
                         const module = require(`../handlers/${event}.js`)
                         module(this.client, payload)
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