const express = require("express");
const cors = require('cors');
const connectDB = require("./database");

class Server {
    constructor() {
        this.port = process.env.PORT || 8080;
        this.app = express();
        this.corsoptions = {
            origin: [
                process.env.FRONTEND_URL,
            ]
        };
        this.bookPath = "/api/book";
        this.historyPath = "/api/history";
        this.requestSwapPath = "/api/request_swap";
        this.userBookPath = "/api/user_book";
        this.userPath = "/api/user";
        this.wishListPath = "/api/wish_list";
        this.authPath = "/api/auth";

        this.middlewares();
        this.routes()
        connectDB();
    }

    routes() {
        this.app.use(this.bookPath, require("../routes/book"));
        this.app.use(this.historyPath, require("../routes/history"));
        this.app.use(this.requestSwapPath, require("../routes/request_swap"));
        this.app.use(this.userBookPath, require("../routes/user_book"));
        this.app.use(this.userPath, require("../routes/user"));
        this.app.use(this.wishListPath, require("../routes/wish_list"));
        // this.app.use(this.authPath, require("../routes/auth"));

        this.app.get("*", function (req, res) {
            res.status(404).json({
                msg: "Route not found",
            });
        });

        this.app.post("*", function (req, res) {
            res.status(404).json({
                msg: "Route not found",
            });
        });
    }

    middlewares() {
        this.app.use(cors(this.corsoptions));
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("The server is listening on the port: ${this.port}");
        });
    }
}

module.exports = Server;