const Guild = require("../Utils/Guild")

module.exports =  function(client, payload) {
  const d = payload.d

  client.user = {
    nome: d.user.username,
    hashtag: d.user.discriminator,
    verificado: d.user.verified,
    id: d.user.id,
    flags: d.user.flags,
    email: d.user.email,
    bot: d.user.bot,
    avatar: d.user.avatar
  }
  
  for (const guild of d.guilds) {
    if(!guild.unavailable){
    const g = new Guild(guild, client)
    client.servidores.adicionar(g)
    }
  }

  client.ready = true
  client.emit("ready")
}