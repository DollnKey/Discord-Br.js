module.exports = class ClientUser {
    constructor(nome = "",
        hashtag = "",
        id = "",
        verificado = false,
        email = "",
        bot = "",
        flags = 0,
        avatar = "") {
        this.nome =  nome;
        this.hashtag = hashtag;
        this.id = id;
        this.verificado = verificado;
        this.email = email;
        this.bot = bot;
        this.flags = flags;
        this.avatar = avatar;
    }

    get nome(){
        return this.nome
    }

    get hashtag(){
        return this.hashtag
    }

    get id(){
        return this.id
    }

    get verificado(){
        return this.verificado
    }

    get email(){
        return this.email
    }

    get bot(){
        return this.bot
    }

    get flags(){
        return this.flags
    }

    get avatar(){
        return this.avatar
    }
}