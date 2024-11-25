const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.CONNECTION_STRING, {
        dbName: process.env.DB_NAME
    }).then(
        ()=> {
            console.log("SUCCESSFUL CONNECTION TO the DB");
        }
    ).catch(
        (error)=> {
            console.log("UNSUCCESSFUL CONNECTION TO THE DB");
            console.log(error);
        }
    )
}

module.exports = connectDB;