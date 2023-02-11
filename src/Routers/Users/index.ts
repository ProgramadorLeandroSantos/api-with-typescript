import { Router } from "express";
import { Controllers } from "../../Controllers"; 

const route = Router();

route.get('/users', Controllers.userController.main)

export const userRouters = route;
