import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";


export class CreateCategoryController {
    async handle(request:Request, response:Response){
        const { name, color } = request.body;


        const createCategoryUseCase = new CreateCategoryUseCase();


        const data = await createCategoryUseCase.execute({ name, color })

        return response.send(data).status(201)
    }
}