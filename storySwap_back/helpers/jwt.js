const jwt = require("jsonwebtoken");

const generateJWT = (email = "") => {
    return new Promise((resolve, reject) => {
        const payload = { email };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "30d"
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject("Token could not be generated")
            } else {
                resolve(token);
            }
        })
    });
}

module.exports = {
    generateJWT
};