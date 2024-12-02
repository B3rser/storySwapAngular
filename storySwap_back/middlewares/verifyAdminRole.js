const { request, response } = require("express");

const verifyAdminRole = (req = request, res = response, next) => {
    if(!req.userActive){
        return res.statusCode(401).json({
            msg: "Permission Denied"
        })
    }

    if(req.userActive.type != "admin") {
        return res.statusCode(401).json({
            msg: "Permission Denied"
        })
    }

    next();
}

module.exports = {
    verifyAdminRole
}