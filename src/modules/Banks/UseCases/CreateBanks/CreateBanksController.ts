import { Request, Response } from 'express'
import { CreateBanksUseCase } from './CreateBanksUseCase';

export class CreateBanksController {
    async handle(request:Request, response:Response) {
        
        const{ name, bankPictureUrl } = request.body;


        const createBanksUseCase =  new CreateBanksUseCase();

        const data = await createBanksUseCase.execute({ name, bankPictureUrl })
       

        return response.status(201).send(data)
    }
}