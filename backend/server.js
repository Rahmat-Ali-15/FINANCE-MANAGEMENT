import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { Connection } from "./config/db.js";
import { userRoutes } from "./routes/user.routes.js";
dotenv.config();


//# Server 
const server = express();


//# Routes
server.use(express.json(), cookieParser());

server.use("/user", userRoutes);


server.listen(process.env.PORT, async () => {
  try {
    await Connection();
    console.log("DB Connected successfully ✅");
  } catch (error) {
    console.log(error);
    console.log("DB Crashed! Something went wrong ❌");
  } finally {
    console.log(`Server is running on port ${process.env.PORT}`);
  }
});
