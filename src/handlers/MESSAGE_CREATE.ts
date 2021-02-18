import Message from "../Utils/Message"

export default function(client: any, payload: any){

    const message = new Message(payload.d, client)
    client.emit("message", message)
 }