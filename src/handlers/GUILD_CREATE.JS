const Guild = require("../Utils/Guild")
const Role = require("../Utils/Role")
const User = require("../Utils/User")

module.exports =  function(client, payload) {
  const d = payload.d

  let guild = client._preguilds.includes(d.id)
  if(guild){
        const g = new Guild(d, client)
        client.servidores.adicionar(g)
  }else {
    const g = new Guild(d, client)
    client.servidores.adicionar(d)
      if(client.online){
          client.emit("guildCreate", g)
      }
  }

  d.roles.forEach(r => {
    client.cargos.adicionar(new Role(client, r))
  })

  d.members.forEach(e => {
  if(e.user.id === client.eu.id) return;
  client.usuarios.adicionar(new User(client, e.user))
  })
}