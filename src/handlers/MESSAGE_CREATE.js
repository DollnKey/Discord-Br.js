const Message = require("../Utils/Message");

module.exports = function(client, payload) {
    const message = new Message(payload.d, client)
    client.emit("message", message)
}