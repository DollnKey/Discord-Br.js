<div align="center">
   <br />
   <p style="font-size=20px">
   <h1>

   Discord-Br.js [![NPM version](https://img.shields.io/npm/v/eris.svg?style=flat-square)](https://npmjs.com/package/discord-br.js)
   =============
   </h1>
   </p>
</div>

## Sobre

Um wrapper feito 100% por brasileiros, utilizando somente a api do discord!

Instalação:
-----------

```
 npm install --save discord-br.js
```

Exemplo:
--------

```js
const dbr = require("discord-br.js")

const client = new dbr.Client()

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

[Discord de Suporte](https://discord.gg/MNBCzxaFsY)