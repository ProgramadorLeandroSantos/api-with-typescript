import express from "express";
import AppRouters  from "./Routers";

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        this.server.use(express.json());
    }

    private router() {
        this.server.use(AppRouters);
    }
}


export default new App().server.listen(3000);