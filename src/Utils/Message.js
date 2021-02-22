const { throws } = require("assert");
const User = require("../Utils/User");
const Member = require("./Member");

module.exports = class Message {
    constructor(data, client) {
        const _client = client;
        this.tipo = data.type || 0
        this.criado = Date.parse(data.timestamp)
        this.conteudo = data.content || "";
        this.servidorID = data.guild_id || "";
        this.canalID = data.channel_id || "";
        this.id = data.id
        this.servidor = client.servidores.get(this.servidorID)
        if (data.author) {
            this.autor = _client.usuarios.get(data.author.id)
        }

        if (data.member) {
            let member = data.member;
            this.member = new Member(_client, member)
        }
    }

    async reply(content = "") {
        const userAgent = `DiscordBot (https://github.com/Discord-br/Discord-Br.js, ${require("../../package.json").version})`;

        let res = ""

        return new Promise((resolve, reject) => {
            const headers = {
                "Authorization": "Bot " + _client.token,
                "User-Agent": userAgent,
                "Content-Type": "application/json"
            };

            const fetch = require("node-fetch")

            let data = JSON.stringify({ content: content, tts: false, message_reference: { message_id: this.id, guild_id: this.servidorID } })

            fetch("https://discord.com" + "/api/v8" + "/channels/" + `${this.canalID}/messages`, {
                method: "POST",
                body: data,
                headers: headers
            }).then(res => res.json())
                .then(json => {
                    res = new Message(json, _client)
                })
            return res;
        })
    }
}