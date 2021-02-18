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
  
  client.emit("ready")
}