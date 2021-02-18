const Guild = require("../Utils/Guild")

module.exports =  function(client, payload) {
  const d = payload.d

  let guild = client.servidores.get(d.id)
  if(guild){
      if(!d.unavailable){
        const g = new Guild(d, client)
        client.servidores.add(g)
      }
  }else {
    const g = new Guild(d, client)
    client.servidores.adicionar(d)
      if(client.online){
          client.emit("guildCreate", g)
      }
  }
}