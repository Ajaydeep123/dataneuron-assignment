import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true    //cookies, auth headers, client ssl certs, etc
}))
app.use(express.static("public"))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}));



//routes imports

import healthcheckRouter from "./routes/healthcheck.routes.js"
import componentRouter from "./routes/component.routes.js"


//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/component", componentRouter)

export {app}