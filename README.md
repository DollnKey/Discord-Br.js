<div align="center">
   <br />
   <p>
   <img src="https://media.discordapp.net/attachments/810855209193701489/813364137513320508/dbr_512.png?width=498&height=498" alt="Discord-Br.js" width="212">
   </p>
   <br />
   <p style="font-size=20px">
   <h1>

   Discord-Br.js [![NPM version](https://img.shields.io/npm/v/discord-br.js.svg?style=flat-square)](https://npmjs.com/package/discord-br.js)
   =============
   </h1>
   </p>
</div>

# Discord BR

Discord-BR é uma biblioteca criada para facilitar a conexão com a API do discord por meio do uso do Node.js

## Instalação

Use seu gerenciador de pacotes para instalar a biblioteca 

```bash
yarn add discord-br.js 
```
Ou

```bash
npm install discord-br.js 
```

## Exemplo

```javascript
const { Client } = require("discord-br.js");
const client = new Client();

   client.login("TOKEN")

   client.on("message", async(message) => {
      if(message.conteudo === "!ping"){
         message.reply("Pong!")
   }
})
```

<div align="center">
   <br />
   <p style="font-size=10px">
   <h3>Ainda em desenvolvimento!</h3>
   </p>
</div>

## Suporte

[Discord de Suporte](https://discord.gg/MNBCzxaFsY)

## License

[MIT](https://choosealicense.com/licenses/mit/)
