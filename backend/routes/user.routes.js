import express from "express";
import { signup } from "../controllers/user.controller.js";

export const userRoutes = express.Router();

userRoutes.post("/signup", signup);
