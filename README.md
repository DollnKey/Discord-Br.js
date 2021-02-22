<div align="center">
   <br />
   <p>
   <a href="https://npmjs.com/discord-br.js" ><img src="https://media.discordapp.net/attachments/810855209193701489/813374327319035944/logo_clea.png?width=1025&height=486" alt="Discord-Br.js" width="546">
   </a>
   </p>
   <br />
   <p>
   <a href="https://discord.gg/MNBCzxaFsY"><img src="https://img.shields.io/discord/810855209193701486?color=7289da&logo=discord&logoColor=orange" alt="Dbr.js server"></img></a>
   <a href="https://npmjs.com/package/discord-br.js"><img src="https://img.shields.io/npm/v/discord-br.js.svg?style=flat-square" alt="npm"></img></a>
   </p>
</div>

## Sobre

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

   client.on("mensagem", async(message) => {
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

[MIT](https://github.com/Discord-br/Discord-Br.js/blob/master/LICENSE)