import { Router } from "express";
import { Controllers } from "../../Controllers";


const route = Router();
const { userController } = Controllers;

route.get('/users', userController.main)

export const userRouters = route;
