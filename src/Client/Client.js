const eventEmitter = require("events")
const Collection = require("../Utils/Collection")
const {ClientUser, FormatoImagem, Options} = require("../Utils/Constants")
const Guild = require("../Utils/Guild")


module.exports = class Client extends eventEmitter{
     constructor(options = {
      formatoImagem: "png"|"jpg"|"jpeg"|"webp"|"gif"
     }){
        super()
        this.token = ""
        this._user = {
         nome: "",
         hashtag: 0,
         verificado: false,
         id: "",
         email: "",
         bot: true,
         avatar: ""
        }
        
        this.options = Object.assign({
         formatoImagem: "png"|"jpg"|"jpeg"|"webp"|"gif"
      }, options)

      if(this.options.formatoImagem && !FormatoImagem.includes(this.options.formatoImagem)){
         throw new Error("Formato de Imagem errado!")
      }


      this.startTime = 0;

      this.servidores = new Collection(Guild)
     }

     login(token = ""){
        if(!token || typeof token !== "string") throw new Error("Token Inválido!")
        this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '');
        const websocket = require("../WebSocket/WebSocketManager")
        this.startTime = Date.now() 
        const ws = new websocket(this).connect(this.token)
     }

     get tempoon(){
        return Date.now() - this.startTime 
     }

     emit(event = "", ...args){
        super.emit(event, ...args)
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