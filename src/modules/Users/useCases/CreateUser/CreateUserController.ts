import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request:Request,response:Response) {

        const { name, password, email } = request.body;

        const createUserUseCase = new CreateUserUseCase();
        
        const data = await createUserUseCase.execute({name, password, email})
             
        
        return response.send(data).status(201)

    }
}