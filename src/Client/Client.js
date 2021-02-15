const eventEmitter = require("events")
const ClientUser = require("./ClientUser")

module.exports = class Client extends eventEmitter{
     constructor(){
        super({})
        this.token = ""
        this._user = ClientUser;
     }

     login(token = ""){
        if(!token || typeof token !== "string") throw new Error("Token Inválido!")
        this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '');
        const websocket = require("../WebSocket/WebSocketManager")

        const ws = new websocket(this).connect(this.token)
     }
   

     token(){
         return this.token
     }

     set user(user = ClientUser){
        this._user = user
     }
     
     get user(){
        return this._user
     }
    
}