class Validations {
    static email(email){
        if(typeof email !== 'string') throw new Error("The email must be a string");
        
    }

    static password(password){
        if(typeof password !== 'string') throw new Error("The password must be a string");
        if(password.length < 8) throw new Error("The password must be at least 8 characters long");
        
    }
}

module.exports = {
    Validations
}