"use strict";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import todoRouter from "./todo/route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(todoRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Express server running on port ${process.env.SERVER_PORT}`);
});


