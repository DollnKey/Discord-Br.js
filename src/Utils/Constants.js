const { constants } = require("buffer")

module.exports = {
   Identify: {
     op: 2,
     d: {
       token: "",
       properties: {
           $os: process.platform,
           $browser: "discord-br.js",
           $device: "discord-br.js"
       }
     }
   },
   Heartbeat: {
       op: 1,
       d: null
   },
   ClientUser: {
     nome: "",
     hashtag: 0,
     verificado: false,
     id: "",
     email: "",
     bot: true,
     avatar: "",
     flags: 0
   },
   Options: {
     formatoImagem: "png"|"jpg"|"jpeg"|"webp"|"gif"
   }
}

module.exports.FormatoImagem = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif"
]