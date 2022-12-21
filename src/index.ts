import 'express-async-errors'
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(routes);
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

app.listen(3333)

