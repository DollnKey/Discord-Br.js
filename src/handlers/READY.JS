const Client = require("../Client/Client")
const ClientUser = require("../Client/ClientUser")

module.exports = (client = Client, payload = {}) =>{

   const d = payload.d
   client.user = new ClientUser(
     d.user.username,
     d.user.discriminator,
     d.user.verified,
     d.user.id,
     d.user.flags,
     d.user.email,
     d.user.bot,
     d.user.avatar
   )

   console.log(client)
}