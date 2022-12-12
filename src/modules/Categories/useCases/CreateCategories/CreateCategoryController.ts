import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";


export class CreateCategoryController {
    async handle(request:Request, response:Response){
        const { name, color } = request.body;

        console.log(request.body)

        const createCategoryUseCase = new CreateCategoryUseCase();


        const data = await createCategoryUseCase.execute({ name, color }).catch(err => {
            return response.status(400).json({"errorMessage": err.message})
        })

        return response.send(data).status(201)
    }
}