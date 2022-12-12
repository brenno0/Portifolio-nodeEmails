import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
    async handle(request:Request,response:Response){
        const listCategoriesUseCase = new ListCategoriesUseCase()
        const categories = await listCategoriesUseCase.execute(request.query)
        .catch(err => {
            return response.status(400).send({"errorMessage":err.message})
        })

        return response.status(200).send(categories)
    }
}