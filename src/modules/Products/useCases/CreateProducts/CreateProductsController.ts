import { Request, Response } from "express";
import { CreateProductsUseCase } from "./CreateProductsUseCase";


export class CreateProductsController {
    async handle(request:Request,response:Response) {
        const { name, price, description, userId, categoryId, banksId } = request.body

        const createProductsUseCase = new CreateProductsUseCase()
        
        const data = await createProductsUseCase.execute({
            name,
            price,
            description,
            userId,
            categoryId,
            banksId
        })
        .catch(err => {
            return response.status(400).json({"errorMessage":err.message})
        })


        return response.status(201).send(data)
    }
}