import { Request, Response } from 'express'
import { CreateBanksUseCase } from './CreateBanksUseCase';

export class CreateBanksController {
    async handle(request:Request, response:Response) {
        
        const{ name, bankPictureUrl } = request.body;

        console.log(name)
        console.log(bankPictureUrl)

        const createBanksUseCase =  new CreateBanksUseCase();

        const data = await createBanksUseCase.execute({ name, bankPictureUrl })
        .catch(error => {
            return response.status(400).json({"errorMessage":error.message})
        })

        return response.status(201).send(data)
    }
}