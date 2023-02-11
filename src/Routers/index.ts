import { Router } from "express";
import { userRouters } from "./Users";

const route = Router();

const AppRouters = route.stack = [
    userRouters
];

export  default AppRouters;