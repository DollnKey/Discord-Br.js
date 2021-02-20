module.exports = (client, payload) => {
  let user = client.usuarios.get(payload.d.user.id)
  if(!user)return;
  user.clientstatus = payload.d.client_status
  user.status = payload.d.status
  user.activities = payload.d.activities
}