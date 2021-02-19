const Guild = require("../Utils/Guild")

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
}