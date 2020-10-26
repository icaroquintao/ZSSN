const express = require("express");
//Separar a parte da aplicação com a parte de ouvir uma porta para testes!
class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;