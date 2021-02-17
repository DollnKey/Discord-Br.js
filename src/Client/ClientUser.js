module.exports = class ClientUser {
    constructor(nome = "", hashtag = 0, verificado = true, id = "", flags = 0, email = "", bot = true, avatar = ""){
        this = {
            nome, 
            hashtag,
            verificado,
            id,
            flags,
            email,
            bot,
            avatar
        }

        return this
    }
}