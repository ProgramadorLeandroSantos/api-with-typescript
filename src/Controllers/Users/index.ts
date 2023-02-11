import { Request, Response } from "express";

class UserController {

    public main(req: Request, res: Response) {
        return res.json({
            response: [{id: 1, name:'Leandro santos'},{id: 2, name:'Elaine santos'}]
        });
    }
}

export const userController = new UserController();