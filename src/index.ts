import 'express-async-errors'
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()


app.use(express.json())
app.use(routes);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({
    origin:"https://brennorodrigues.me/"
}))
dotenv.config()

app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            "errorMessage":err.message
        })
    }else {
        return response.status(500).json({
            status:"Error",
            message:"Erro interno no servidor"
        })
    }
})

app.listen(process.env.PORT || 3333)


