const { response, request } = require("express");
const { UserRepository } = require("../repositories/user");
const { Validations } = require("../helpers/validations")
const bcrypt = require("bcrypt");
const { generateJWT } = require("../helpers/jwt");

const login = async (req = request, res = response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            msg: "Invalid data",
        })
    }

    const user = await UserRepository.getOne({ email: email })
    if (!user) {
        return res.status(401).json({
            msg: "Email and/or Password incorrect"
        })
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword){
        return res.status(401).json({
            msg: "Email and/or Password incorrect"
        })
    }

    try {
        const{ password: _, ...simpleUser} = user.toObject();
        const token = await generateJWT(email);
        res.status(200).json({
            msg:"Login OK",
            token: token,
            user: simpleUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal error"
        })
    }
}

const register = async (req = request, res = response) => {
    const { name, last, email, password, address } = req.body;
    const salt_rounds = process.env.SALT_ROUNDS || 10

    if (!name || !last || !email || !password ) {
        return res.status(400).json({
            msg: "Missing required fields: name, last, email, password, type",
        });
    }

    try {
        Validations.email(email);
        Validations.password(password);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const user = await UserRepository.getOne({ email });
        if (user) {
            return res.status(400).json({
                msg: "Email already used",
            });
        }
        const hashedPassword = await bcrypt.hash(password, Number(salt_rounds));
        const newUser = await UserRepository.create({
            name: name.trim(),
            last: last.trim(),
            email: email.trim().toLowerCase(),
            password: hashedPassword,
            address: address || "",
        });

        const { password: _, ...simpleUser } = newUser.toObject();
        res.status(200).json({
            msg: "User created",
            user: simpleUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal error",
        });
    }
};

const me = async (req = request, res = response) => {
    const { password, ...userData } = req.userActive.toObject();
    console.log(userData)
    res.status(200).json(userData);
}

module.exports = {
    login,
    register,
    me
}