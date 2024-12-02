const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const { UserRepository } = require('../repositories/user')

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({
            msg: "Invalid token"
        })
    }

    try {
        const { email } = jwt.verify(token, process.env.SECRET_KEY)
        const user = await UserRepository.getOne({ email: email });
        if (!user) {
            return res.status(401).json({
                msg: "Invalid token"
            })
        } else {
            req.userActive = user
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Invalid token"
        })
    }
}

module.exports = {
    validateJWT
}