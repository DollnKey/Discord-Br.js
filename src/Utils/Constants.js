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
}