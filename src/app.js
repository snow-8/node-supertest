import express from "express";
import cookieSession from "cookie-session";

import { router } from "./routes/index.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ["asdf"]}));

app.use(router)

export { app }