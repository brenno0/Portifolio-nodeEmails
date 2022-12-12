import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    async handle(request:Request, response:Response){
        const listUsersUseCase = new ListUserUseCase()

        console.log(request.query)
        const data = await listUsersUseCase.execute(request.query)
        .catch(err => {
            return response.status(400).json({"errorMessage":err.message})
        })

        return response.status(200).send(data)
        
    }
}