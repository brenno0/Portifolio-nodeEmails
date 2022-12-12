import { Request, Response } from "express";
import { CreateProductsUseCase } from "./CreateProductsUseCase";


export class CreateProductsController {
    async handle(request:Request,response:Response) {
        const { name, price, description, userId, categoryId, banksId } = request.body

        const createProductsUseCase = new CreateProductsUseCase()
        console.log(request.body)
        
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

        console.log(data)

        return response.status(201).send(data)
    }
}