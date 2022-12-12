import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    async handle(request:Request, response:Response){
        const listUsersUseCase = new ListUserUseCase()

        const data = await listUsersUseCase.execute(request.query)
       

        return response.status(200).send(data)
        
    }
}