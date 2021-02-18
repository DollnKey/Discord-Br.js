export default class ClientUser {
    constructor(nome: string,
        hashtag: string,
        id: string,
        verificado: boolean,
        email: string,
        bot: boolean,
        flags: number,
        avatar: string) {
        return {
            nome, hashtag, id, verificado, email, bot, flags, avatar
        }
    }

}