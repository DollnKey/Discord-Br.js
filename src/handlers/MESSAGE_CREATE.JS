const Client = require("../Client/Client")
const {ClientUser} = require("../Utils/Constants");
const Message = require("../Utils/Message");

module.exports = (client = Client, payload = {}) =>{

   const d = payload.d
   const message = new Message(d, client)
   
   client.emit("message", message)
}