import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub:string
}

export async function ensureAuthentication(request:Request,response:Response, next:NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({
            "errorMessage":"Token inexistente."
        })
    }
        const [,token] = authHeader.split(" ")
        
        try { 
            const { sub } = verify(token, "5c40c281a65846ed71cb9bad80cdd902") as IPayload

            request.userId = sub;
            
            return next();
            
        } catch(err) {
            return response.status(401).json({
                "errorMessage":"Token inválido."
            })
        }
        
}